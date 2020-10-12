(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{405:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"politica-de-seguridad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#politica-de-seguridad"}},[s._v("#")]),s._v(" Politica de Seguridad")]),s._v(" "),a("p",[s._v("ES4X te permite que ejecutes tus aplicacoines en un sandbox totalmente seguro. Igual que "),a("a",{attrs:{href:"https://deno.land/",target:"_blank",rel:"noopener noreferrer"}},[s._v("deno"),a("OutboundLink")],1),s._v(", ES4X puede\naislar tu aplicacion. La tecnologia que permite esto es el "),a("a",{attrs:{href:"https://docs.oracle.com/javase/tutorial/essential/environment/security.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("security manager"),a("OutboundLink")],1),s._v(" de JVM.\nLos managers de seguridad fueron los que aislaban el antiguo codigo "),a("code",[s._v("Applet")]),s._v(" de la maquina anfitriona. Son mas precisos que lo\nque te permite "),a("code",[s._v("deno")]),s._v(" a dia de hoy.")]),s._v(" "),a("h2",{attrs:{id:"crea-un-security-policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crea-un-security-policy"}},[s._v("#")]),s._v(" Crea un security.policy")]),s._v(" "),a("p",[s._v("Para crear una politica de segurida, ejecuta la herramienta "),a("code",[s._v("es4x")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ es4x security-policy\n\nCreating a new "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'security.policy'")]),s._v(" with full network access and\nread-only IO access to the working directory.\n")])])]),a("p",[s._v("El archivo generado es una plantilla simple, si lo abres lo puedes leer:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Grant the following permissions to code that shall be executed from")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the node_modules/.lib/* directory")]),s._v("\ngrant codeBase "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file:\\${user.dir}\\${/}node_modules\\${/}.lib\\${/}*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vert.x will need full access to the temp dir.")]),s._v("\n  permission java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FilePermission "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\${java.io.tmpdir}\\${/}-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"read,write,delete"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the code should be able to read the JVM/GraalVM runtime libs")]),s._v("\n  permission java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FilePermission "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\${java.home}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"read"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  permission java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FilePermission "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\${java.home}\\${/}..\\${/}release"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"read"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  permission java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FilePermission "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\${java.home}\\${/}-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"read"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// applications are allowed to read all files from the CWD")]),s._v("\n  permission java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FilePermission "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\${user.dir}\\${/}-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"read"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// uncomment the following to allow full read access")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//permission java.io.FilePermission "<<ALL FILES>>", "read";')]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Netty performs some reflection we need to allow it")]),s._v("\n  permission java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("reflect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ReflectPermission "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"suppressAccessChecks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// By default we allow all runtime permissions")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// users may want to restrict this further say for example to")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// deny access to environment variables, etc...")]),s._v("\n  permission java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RuntimePermission "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ES4X setup a nice looking logger")]),s._v("\n  permission java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LoggingPermission "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"control"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Allow full access to JVM system properties")]),s._v("\n  permission java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PropertyPermission "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"read,write"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// currently we allow all access to the network")]),s._v("\n  permission java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SocketPermission "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"accept,connect,listen,resolve"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("Esta plantilla permite acceso total a la red y solo lectura a todos los archivos desde "),a("code",[s._v("CWD")]),s._v(" donde se inicia la aplicacion.")]),s._v(" "),a("p",[s._v("::: Consejo\nUna vez que conozcas todos los permisos que necesita tu aplicacion puedes comenzar a restringirlos incluso mas!\n:::")]),s._v(" "),a("p",[s._v("::: Advertencia\nAunque esta plantilla parece buena para comenzar, recuerda que el "),a("code",[s._v("CWD")]),s._v(" es de solo lectura, asi que si por ejemplo\nestas ejecutando un servidor http que escribe uploads, a menos que estos uploads vayan al directorio "),a("code",[s._v("$TEMP")]),s._v(", van\na fallar porque la aplicacion no tiene persmisos para escribir.\n:::")])])}),[],!1,null,null,null);t.default=n.exports}}]);