/*
 * Copyright 2019 Red Hat, Inc.
 *
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  and Apache License v2.0 which accompanies this distribution.
 *
 *  The Eclipse Public License is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  The Apache License v2.0 is available at
 *  http://www.opensource.org/licenses/apache2.0.php
 *
 *  You may elect to redistribute this code under either of these licenses.
 */
package io.reactiverse.es4x.commands;

import io.vertx.core.cli.CLIException;
import io.vertx.core.cli.annotations.*;
import io.vertx.core.spi.launcher.DefaultCommand;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.*;
import java.nio.file.Files;

import static io.reactiverse.es4x.cli.Helper.*;

@Name("vscode")
@Summary("Launcher for vscode project.")
public class VscodeCommand extends DefaultCommand {

	private void processLauncher(File json) throws IOException {

    final File pkg = new File(getCwd(), "package.json");

    String app = "Attach";

    if (pkg.exists()) {
      JSONObject pkgJson = JSON.parseObject(pkg);
      app = "Attach " + pkgJson.get("name");
    }

    JSONObject attach = JSON.parseObject(json);

    if (!attach.has("configurations")) {
			attach.put("configurations", new JSONArray());
		}

		final JSONArray configurations = attach.getJSONArray("configurations");

    // replace the launcher if already present
    int toRemove = -1;

    for (int i = 0; i < configurations.length(); i++) {
      JSONObject config = configurations.getJSONObject(i);
      if (app.equals(config.get("name"))) {
        toRemove = i;
        break;
      }
    }

    if (toRemove != -1) {
      configurations.remove(toRemove);
    }

    JSONObject config = new JSONObject();
		config.put("name", app);
		config.put("type", "graalvm");
		config.put("request", "launch");
		config.put("cwd", "${workspaceFolder}");
		config.put("port", 9229);

		configurations.put(config);
    JSON.encodeObject(json, attach);
	}

	@Override
	public void run() throws CLIException {
		File launch = new File(getCwd(), ".vscode/launch.json");

		if (!launch.exists()) {
		  final File vscode = new File(getCwd(), ".vscode");
			if (!vscode.exists() && !vscode.mkdirs()) {
        fatal("Failed to mkdir .vscode");
      }
			try (InputStream in = VscodeCommand.class.getClassLoader()
					.getResourceAsStream("META-INF/es4x-commands/vscode-launcher.json")) {
				if (in == null) {
					fatal("Cannot load vscode launcher.json template.");
				} else {
					Files.copy(in, launch.toPath());
				}
			} catch (IOException e) {
				fatal(e.getMessage());
			}
    }

    try {
      processLauncher(launch);
    } catch (IOException e) {
      fatal(e.getMessage());
    }
	}
}
