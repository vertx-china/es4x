(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{406:function(t,a,e){"use strict";e.r(a);var n=e(42),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"eclipse-vert-x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-vert-x"}},[t._v("#")]),t._v(" Eclipse Vert.x")]),t._v(" "),e("p",[t._v("Tal como deberia ya estar claro, Vert.x es el IO y el modelo por defecto de programacion usado en ES4X. Sin embargo hay\nalgunas buenas mejoras del standard "),e("a",{attrs:{href:"https://vertx.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vert.x APIs"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"apis-generadas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apis-generadas"}},[t._v("#")]),t._v(" APIs Generadas")]),t._v(" "),e("p",[t._v("Todas las APIs publicadas a "),e("code",[t._v("npm")]),t._v(" con el namespace "),e("code",[t._v("@vertx")]),t._v(" y "),e("code",[t._v("@reactiverse")]),t._v(" son generadas en codigo. Generacion de codigo\nes una ayuda que permite que estas APIs sean utilizadas por usuarios "),e("code",[t._v("JavaScript")]),t._v(" en un formato que sea familiar sin\ncomprometer el rendimiento de la aplicacion.")]),t._v(" "),e("p",[t._v("Todas las interacciones con la JVM occuren sobre el objecto "),e("code",[t._v("Java")]),t._v(". La parte mas importance es mover una clase JVM a JS:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Importa la clase java.lang.Math para utilizarla")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// como un tipo JS en el script")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Math "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Java"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'javalang.Math'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Podriamos hacer esto con todos los APIs pero hay varios limites que ES4X intenta resolver:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Propenso a error")]),t._v(" - Necesitas saber los APIs de Java y tipos exactos para utilizarlos en JavaScript.")]),t._v(" "),e("li",[e("strong",[t._v("Imposible definir dependencias")]),t._v(" - Si necesitas utilizar APIs de otros modulos, importar de clase en clase no puede definir dependencia entre ellas.")]),t._v(" "),e("li",[e("strong",[t._v("Sin soporte IDE")]),t._v(" - El desarrollador necesitara conocer el API antes de usarlo y el IDE no ofrecera asistencia.")])]),t._v(" "),e("p",[t._v("El generador ES4X soluciona esto creando un modulo "),e("code",[t._v("npm")]),t._v(" para cada modulo "),e("code",[t._v("vertx")]),t._v(" y definicion de tipos en cada clase.")]),t._v(" "),e("p",[t._v("Cada modulo tedra los siguientes archivos:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("package.json")]),t._v(" - Define las dependencias entre modulos")]),t._v(" "),e("li",[e("code",[t._v("index.js")]),t._v(" - interfaz API commonjs")]),t._v(" "),e("li",[e("code",[t._v("index.mjs")]),t._v(" - Interfaz API ESM")]),t._v(" "),e("li",[e("code",[t._v("index.d.ts")]),t._v(" - Definicion completa de tipos para la interfaz API")]),t._v(" "),e("li",[e("code",[t._v("enum.js")]),t._v(" - Enumeraciones commonjs API")]),t._v(" "),e("li",[e("code",[t._v("enum.mjs")]),t._v(" - Enumeraciones ESM API")]),t._v(" "),e("li",[e("code",[t._v("enum.d.ts")]),t._v(" - Definicion completa de tipos para las enumeraciones API")]),t._v(" "),e("li",[e("code",[t._v("options.js")]),t._v(" - Objetos de datos commonjs API")]),t._v(" "),e("li",[e("code",[t._v("options.mjs")]),t._v(" - Objectos de datos ESM API")]),t._v(" "),e("li",[e("code",[t._v("options.d.ts")]),t._v(" - Definicion completa de tipos para los objectos de datos")])]),t._v(" "),e("p",[t._v("Todos los archivos "),e("code",[t._v("index")]),t._v(" simplificaran la importancion de clases a JVM con reemplazos, por ejemplo:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sin ES4X")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Router "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Java"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'io.vertx.ext.web.Router'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// con ES4X")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Router "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vertx/web'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Este pequeño cambio permite que los IDEs ayuden con el desarrollo y que los gestores de paquetes descarguen las dependencias necesarias.\nFinalmente todos los archivos "),e("code",[t._v(".d.ts")]),t._v(" avisaran a los IDEs sobre los tipos y datan ayuda de autocompletacion de codigo.")]),t._v(" "),e("h2",{attrs:{id:"promise-future"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise-future"}},[t._v("#")]),t._v(" promise/future")]),t._v(" "),e("p",[t._v("Vert.x tiene 2 tipos:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("io.vertx.core.Future")])]),t._v(" "),e("li",[e("code",[t._v("io.vertx.core.Promise")])])]),t._v(" "),e("p",[t._v("Extrañamente, una "),e("code",[t._v("promesa")]),t._v(" Vert.x no es lo mismo que un "),e("code",[t._v("futuro")]),t._v(" en JavaScript. Una "),e("code",[t._v("promesa")]),t._v(" Vert.x es la parte escribible de\nun "),e("code",[t._v("futuro")]),t._v(" Vert.x. En terminos de JavaScript:")]),t._v(" "),e("ul",[e("li",[t._v("Vert.x "),e("code",[t._v("Future")]),t._v(" === JavaScript "),e("code",[t._v("Promise Like (Thenable)")])]),t._v(" "),e("li",[t._v("Vert.x "),e("code",[t._v("Promise")]),t._v(" === JavaScript "),e("code",[t._v("Executor Function")])])]),t._v(" "),e("h2",{attrs:{id:"async-await"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#async-await"}},[t._v("#")]),t._v(" async/await")]),t._v(" "),e("p",[e("code",[t._v("async/await")]),t._v(" esta disponible sin necesidad de compilacion en "),e("code",[t._v("GraalVM")]),t._v(". ES4X añade una caracteristica mas al tipo\n"),e("code",[t._v("Future")]),t._v(" de Vert.x. Los APIs que devuelven un "),e("code",[t._v("Future")]),t._v(" de Vert.x se pueden usar como "),e("code",[t._v("thenable")]),t._v(", esto significa que:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Usando Java API")]),t._v("\nvertx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHttpServer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onSuccess")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("server")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Servidor listo!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFailure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fallo en el inicio del servidor!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Puede ser usado como "),e("code",[t._v("Thenable")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" server "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" vertx\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHttpServer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Servidor listo!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fallo en el inicio del servidor!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v(":::Consejo\n"),e("code",[t._v("async/await")]),t._v(" funciona hasta con bucles, lo que hace trabajar con codigo asincronico muy facil, incluso mezclando codigo JS y Java.\n:::")]),t._v(" "),e("h2",{attrs:{id:"conversion-de-tipos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conversion-de-tipos"}},[t._v("#")]),t._v(" Conversion de Tipos")]),t._v(" "),e("p",[t._v("Vert.x esta escrito en "),e("code",[t._v("Java")]),t._v(", sin embargo en "),e("code",[t._v("JavaScript")]),t._v(" no tenemos que preocuparnos de los tipos tanto como en "),e("code",[t._v("Java")]),t._v(". ES4X\nhace algunas conversiones de forma automatica por defecto:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Java")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("TypeScript")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("void")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("void")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("byte")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("short")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("long")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("float")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("double")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("char")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("boolean[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("boolean[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("byte[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("short[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("int[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("long[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("float[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("double[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("char[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Void")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("void")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("any")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Double")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Float")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Integer")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Long")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Short")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Char")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.String")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.CharSequence")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Boolean[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("boolean[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Double[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Float[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Integer[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Long[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Short[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Char[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.String[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.CharSequence[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Object[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("any[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Iterable")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("any[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.BiConsumer")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any, U extends any>(arg0: T, arg1: U) => void")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.BiFunction")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any, U extends any, R extends any>(arg0: T, arg1: U) => R")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.BinaryOperator")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>(arg0: T, arg1: T) => T")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.BiPredicate")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any, U extends any>(arg0: T, arg1: U) => boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.Consumer")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>(arg0: T) => void")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.Function")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any, R extends any>(arg0: T) => R")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.Predicate")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>(arg0: T) => boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.Supplier")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>() => T")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.UnaryOperator")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>(arg0: T) => T")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.time.Instant")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Date")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.time.LocalDate")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Date")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.time.LocalDateTime")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Date")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.time.ZonedDateTime")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Date")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Iterable<T>")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T>[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.Collection<T>")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T>[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.List<T>")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T>[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.Map<K, V>")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("{ [key: <K>]: <V> }")])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);