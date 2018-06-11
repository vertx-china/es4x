/*
 * Copyright 2018 Red Hat, Inc.
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
package io.reactiverse.es4x.impl.graal;

import io.vertx.core.Vertx;
import io.vertx.core.VertxOptions;
import org.graalvm.polyglot.Value;

import java.util.Map;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.atomic.AtomicReference;
import java.util.function.BiConsumer;
import java.util.function.Consumer;

public class GraalJSRuntime {

  public static Vertx install(Object object, Value json, boolean clustered) {
    if (clustered) {
      final CountDownLatch latch = new CountDownLatch(1);

      final AtomicReference<Throwable> err = new AtomicReference<>();
      final AtomicReference<Vertx> vertx = new AtomicReference<>();

      Vertx.clusteredVertx(new VertxOptions(), ar -> {
        if (ar.failed()) {
          err.set(ar.cause());
          latch.countDown();
        } else {
          final Vertx result = ar.result();
          registerCodec(result, object, json);
          vertx.set(result);
          latch.countDown();
        }
      });

      try {
        latch.await();
      } catch (InterruptedException e) {
        throw new RuntimeException(e);
      }

      if (err.get() != null) {
        throw new RuntimeException(err.get());
      } else {
        return vertx.get();
      }
    } else {
      final Vertx vertx = Vertx.vertx();
      registerCodec(vertx, object, json);
      return vertx;
    }
  }

  private static void registerCodec(Vertx vertx, Object object, Value json) {
    // register a default codec to allow JSON messages directly from GraalVM to the JVM world
    vertx.eventBus().unregisterDefaultCodec(object.getClass());
    vertx.eventBus().registerDefaultCodec(object.getClass(), new JSObjectMessageCodec<>(json));
  }
}
