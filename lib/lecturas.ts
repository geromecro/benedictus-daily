// Lecturas diarias de Benedictus 2026
// Del 1 de febrero (Septuagésima) al 5 de abril (Pascua)

export interface Lectura {
  dia: number;
  comentario?: string;
  lecturaLiturgica?: {
    titulo: string;
    contenido: string;
  };
  lecturaEspiritual?: {
    titulo: string;
    fuente: string;
    contenido: string;
  };
}

// Lecturas completas - días 1-9 (se irán agregando más)
export const LECTURAS: Lectura[] = [
  // DÍA 1
  {
    dia: 1,
    comentario: `Hoy damos inicio a este itinerario de 64 días que culminará en la Pascua, guiados por la Liturgia y nuestro patrono, San Benito.

Siguiendo su regla buscaremos hacer de nuestras vidas una "escuela de servicio divino", cuyo objetivo es reordenar la existencia cotidiana —oración, trabajo, tiempo, relaciones humanas y uso de la tecnología— a la luz de Dios.

Durante las 3 semanas previas al inicio de Cuaresma leeremos la "Vida de San Benito de Nursia", escrita por San Gregorio Magno. Con estas lecturas buscamos conocer más al patrono y guía de este itinerario que estamos iniciando hoy. Buscamos con estas lecturas crecer en devoción al patriarca San Benito, y prepararnos para la lectura de su obra magna "La Regla" que iniciaremos el miércoles de cenizas.`,
    lecturaLiturgica: {
      titulo: "Septuagésima",
      contenido: `El Domingo de Septuagésima finaliza el Ciclo de Navidad, y con él, el tiempo de Epifanía. Y se da comienzo al Ciclo de Pascua, que inicia con el período penitencial y de preparación remota que es el Tiempo de Septuagésima.

Las tres semanas de Septuagésima, Sexagésima y Quincuagésima preparan la Cuaresma, del mismo modo que la Cuaresma prepara la Pascua. Son, por lo mismo, tres semanas de cierta tristeza y de santa compunción, en las que la Liturgia suprime el "Gloria" y el "Aleluya", usa el color morado, y nos remonta al Paraíso terrenal y a los primeros tiempos del mundo, para poner luego ante nuestra vista el drama del pecado original y de sus terribles e inmediatas consecuencias.`,
    },
    lecturaEspiritual: {
      titulo: "La vocación de Benito",
      fuente: "Vida de San Benito - Prólogo",
      contenido: `Hubo un hombre de vida venerable, por gracia y por nombre Benito, que desde su infancia tuvo cordura de anciano. En efecto, adelantándose por sus costumbres a la edad, no entregó su espíritu a placer sensual alguno, sino que estando aún en esta tierra y pudiendo gozar libremente de las cosas temporales, despreció el mundo con sus flores, cual si estuviera marchito.

Nació en el seno de una familia libre, en la región de Nursia, y fue enviado a Roma a cursar los estudios de las ciencias liberales. Pero al ver que muchos iban por los caminos escabrosos del vicio, retiró su pie, que apenas había pisado el umbral del mundo, temeroso de que por alcanzar algo del saber mundano, cayera también él en tan horrible precipicio. Despreció, pues, el estudio de las letras y abandonó la casa y los bienes de su padre. Y deseando agradar únicamente a Dios, buscó el hábito de la vida monástica. Retiróse, pues, sabiamente ignorante y prudentemente indocto.

No conozco todos los hechos de su vida, pero los que voy a narrar aquí los sé por referencias de cuatro de sus discípulos, a saber: Constantino, varón venerabilísimo, que le sucedió en el gobierno del monasterio; Valentiniano, que gobernó durante muchos años el monasterio de Letrán; Simplicio, que fue el tercer superior de su comunidad, después de él; y Honorato, que todavía hoy gobierna el cenobio donde vivió primero.`,
    },
  },

  // DÍA 2
  {
    dia: 2,
    comentario: `Hoy es día de Fiesta, acompañemos la festividad en lo posible con la Santa Misa y/o Vísperas, prestando atención a las lecturas. Que esta celebración llene de alegría nuestra jornada. Acompañemos con el rezo del Oficio Divino para que la liturgia vaya empapando toda la jornada.`,
    lecturaLiturgica: {
      titulo: "La Candelaria o Fiesta de la Purificación de la Sma. Virgen",
      contenido: `Con esta fiesta se cierra el Ciclo de Navidad. Es ésta una fiesta muy antigua, tanto en Oriente como en Occidente. A la Misa del día precedía una procesión, en la que el pueblo llevaba antorchas o cirios encendidos, hasta el siglo X ordinarios, pero en lo sucesivo santificados con una bendición especial, que es como ahora se usa.

El objeto de la fiesta de la Purificación, propiamente dicha, es recordar la presentación del Niño Jesús en el Templo, por la Sma. Virgen y San José y la ofrenda de las dos tortolillas por parte de los mismos. De esa manera cumplió María, sin estar obligada a ello, la Ley de Moisés en su doble faz: la de purificarse Ella, a los 40 días de su alumbramiento, pagando el tributo de las tortolillas (Levítico XII, 2), como pobre que era y la de ofrecerle a Dios su Hijo primogénito, y rescatarlo (Números III, 13, y XVIII, 15).

La fiesta de hoy se compone de tres partes:
1° Bendición de las Candelas.
2° Procesión de las Candelas.
3° La Misa de la Purificación.`,
    },
    lecturaEspiritual: {
      titulo: "La criba rota y reparada",
      fuente: "Vida de San Benito - Capítulo I",
      contenido: `Abandonado ya el estudio de las letras, hizo propósito de retirarse al desierto, acompañado únicamente de su nodriza, que le amaba tiernamente. Llegaron a un lugar llamado Effide, donde, retenidos por la caridad de muchos hombres honrados, se quedaron a vivir junto a la iglesia de San Pedro.

La ya citada nodriza pidió a las vecinas que le prestaran una criba para limpiar el trigo. Dejóla incautamente sobre la mesa y fortuitamente se quebró y quedó partida en dos trozos. Al regresar la nodriza, empezó a llorar desconsolada, viendo rota la criba que había recibido prestada. Pero Benito, joven piadoso y compasivo, al ver llorar a su nodriza, compadecido de su dolor, tomó consigo los trozos de la criba rota e hizo oración con lágrimas. Al acabar su oración encontró junto a sí la criba tan entera, que no podía hallarse en ella señal alguna de fractura. Al punto, consolando cariñosamente a su nodriza, le devolvió entera la criba que había tomado rota.

El hecho fue conocido de todos los del lugar y causó tanta admiración que sus habitantes colgaron la criba a la entrada de la iglesia, para que presentes y venideros conocieran con cuánta perfección el joven Benito había dado comienzo a su vida monástica. Y durante años todo el mundo pudo ver la criba allí, puesto que permaneció suspendida sobre la puerta de la iglesia hasta los tiempos de la invasión lombarda.

Pero Benito, deseando más sufrir los desprecios del mundo que recibir sus alabanzas, y fatigarse con trabajos por Dios más que verse ensalzado con los favores de esta vida, huyó ocultamente de su nodriza y buscó el retiro de un lugar solitario llamado Subiaco, distante de la ciudad de Roma unas cuarenta millas. En este lugar manan aguas frescas y límpidas, cuya abundancia se recoge primero en un gran lago y luego sale formando un río.

Mientras iba huyendo hacia este lugar, un monje llamado Román le encontró en el camino y le preguntó adónde iba. Y cuando tuvo conocimiento de su propósito, guardóle el secreto y le animó a llevarlo a cabo, dándole el hábito de la vida monástica y ayudándole en lo que pudo.

El hombre de Dios, al llegar a aquel lugar, se refugió en una cueva estrechísima, donde permaneció por espacio de tres años ignorado de todos, fuera del monje Román, que vivía no lejos de allí, en un monasterio puesto bajo la regla del abad Adeodato, y en determinados días, hurtando piadosamente algunas horas a la vigilancia de su abad, llevaba a Benito el pan que había podido sustraer, a hurtadillas, de su propia comida.

Desde el monasterio de Román no había camino para ir hasta la cueva, porque ésta caía debajo de una gran peña. Pero Román, desde la misma roca, hacía descender el pan sujeto a una cuerda muy larga, a la que ató una campanilla, para que el hombre de Dios, al oír su tintineo, supiera que le enviaba el pan y saliese a recogerlo.

Pero el antiguo enemigo, que veía con malos ojos la caridad de uno y la refección del otro, un día, al ver bajar el pan, lanzó una piedra y rompió la campanilla. Pero no por eso dejó Román de ayudarle con otros medios oportunos. Mas queriendo Dios todopoderoso que Román descansara de su trabajo y dar a conocer la vida de Benito para que sirviera de ejemplo a los hombres, puso la luz sobre el candelero para que brillara e iluminara a todos los que estuvieran en la casa de Dios.

Bastante lejos de allí vivía un sacerdote que había preparado su comida para la fiesta de Pascua. El Señor se le apareció y le dijo: «Tú te preparas cosas deliciosas y mi siervo en tal lugar está pasando hambre». Inmediatamente el sacerdote se levantó y en el mismo día de la solemnidad de la Pascua, con los alimentos que había preparado para sí, se dirigió al lugar indicado. Buscó al hombre de Dios a través de abruptos montes y profundos valles y por las hondonadas de aquella tierra, hasta que lo encontró escondido en su cueva.

Oraron, alabaron a Dios todopoderoso y se sentaron. Después de haber tenido agradables coloquios espirituales, el sacerdote le dijo: «¡Vamos a comer, que hoy es Pascua!». A lo que respondió el hombre de Dios: «Sí, para mí hoy es Pascua, porque he merecido verte». Es que, estando como estaba alejado de los hombres, ignoraba efectivamente que aquel día fuese la solemnidad de la Pascua. Pero el buen sacerdote insistió diciendo: «Créeme: hoy es el día de Pascua de la Resurrección del Señor. No debes ayunar, puesto que he sido enviado para que juntos tomemos los dones del Señor». Bendijeron a Dios y comieron, y acabada la comida y la conversación, el sacerdote regresó a su iglesia.

También por aquel entonces le encontraron unos pastores oculto en su cueva. Viéndole por entre la maleza, vestido de pieles, creyeron que era alguna fiera. Pero reconociendo luego que era un siervo de Dios, muchos de ellos trocaron sus instintos feroces por la dulzura de la piedad. Su nombre se dio a conocer por los lugares comarcanos y desde entonces fue visitado por muchos, que al llevarle el alimento para su cuerpo recibían a cambio, de su boca, el alimento espiritual para sus almas.`,
    },
  },

  // DÍA 3
  {
    dia: 3,
    comentario: `Un pequeño comentario sobre la frase que recibimos al iniciar cada día en el mensaje de Laudes: las mismas son extraídas del capítulo IV de la Regla, "Los instrumentos de las buenas obras". Consiste en un listado de consejos de San Benito para alcanzar la Santidad.

El capítulo contiene 74 instrumentos, por ello es que cada día iremos compartiendo uno (o en algunas ocasiones dos) para poder ir teniéndolo especialmente presente en esa jornada.

El objetivo es que nos ayude a mantener el espíritu benedictino presente durante todo el itinerario.`,
    lecturaEspiritual: {
      titulo: "Cómo venció una tentación de la carne",
      fuente: "Vida de San Benito - Capítulo II",
      contenido: `Un día, estando a solas, se presentó el tentador. Un ave pequeña y negra, llamada vulgarmente mirlo, empezó a revolotear alrededor de su rostro, de tal manera que hubiera podido atraparla con la mano si el santo varón hubiera querido apresarla. Pero hizo la señal de la cruz y el ave se alejó. No bien se hubo marchado el ave, le sobrevino una tentación carnal tan violenta, cual nunca la había experimentado el santo varón. El maligno espíritu representó ante los ojos de su alma cierta mujer que había visto antaño y el recuerdo de su hermosura inflamó de tal manera el ánimo del siervo de Dios, que apenas cabía en su pecho la llama del amor. Vencido por la pasión, estaba ya casi decidido a dejar la soledad. Pero tocado súbitamente por la gracia divina volvió en sí, y viendo un espeso matorral de zarzas y ortigas que allí cerca crecía, se despojó del vestido y desnudo se echó en aquellos aguijones de espinas y punzantes ortigas, y habiéndose revolcado en ellas durante largo rato, salió con todo el cuerpo herido. Pero de esta manera por las heridas de la piel del cuerpo curó la herida del alma, porque trocó el deleite en dolor, y el ardor que tan vivamente sentía por fuera extinguió el fuego que ilícitamente le abrasaba por dentro. Así, venció el pecado, mudando el incendio.

Desde entonces, según él mismo solía contar a sus discípulos, la tentación voluptuosa quedó en él tan amortiguada, que nunca más volvió a sentir en sí mismo nada semejante.

Después de esto, muchos empezaron a dejar el mundo para ponerse bajo su dirección, puesto que, libre del engaño de la tentación, fue tenido ya con razón por maestro de virtudes. Por eso manda Moisés que los levitas sirvan en el templo a partir de los veinticinco años cumplidos, pero sólo a partir de los cincuenta les permite custodiar los vasos sagrados.

PEDRO.- Algo comprendo del sentido del pasaje que has aducido, sin embargo te ruego que me lo expongas con más claridad.

GREGORIO.- Es evidente, Pedro, que en la juventud arde con más fuerza la tentación de la carne, pero a partir de los cincuenta años el calor del cuerpo se enfría. Los vasos sagrados son las almas de los fieles. Por eso conviene que los elegidos, mientras son aún tentados, estén sometidos a un servicio y se fatiguen con trabajos, pero cuando ya el alma ha llegado a la edad tranquila y ha cesado el calor de la tentación, sean custodios de los vasos sagrados, porque entonces son constituidos maestros de las almas.

PEDRO.- Bien, estoy de acuerdo. Pero ya que me has manifestado el sentido oculto de este pasaje, te pido que sigas contándome la vida de este justo, que has comenzado a narrar.`,
    },
  },

  // DÍA 4
  {
    dia: 4,
    comentario: `Como indica el mensaje miércoles y viernes es día de ayuno y abstinencia siguiendo la tradición de la Iglesia.

Se considera ayuno a hacer una sola comida formal al día, bien sea al mediodía o por la noche. Y dos colaciones.

El mate y otras infusiones no rompen el ayuno.`,
    lecturaEspiritual: {
      titulo: "El jarro roto por la señal de la cruz",
      fuente: "Vida de San Benito - Capítulo III",
      contenido: `Alejada ya la tentación, el hombre de Dios, cual tierra libre de espinas y abrojos, empezó a dar copiosos frutos en la mies de las virtudes, y la fama de su eminente santidad hizo célebre su nombre.

No lejos de allí había un monasterio cuyo abad había fallecido, y todos los monjes de su comunidad fueron adonde estaba el venerable Benito y con grandes instancias le suplicaron que fuera su prelado. Durante mucho tiempo no quiso aceptar la propuesta, pronosticándoles que no podía ajustarse su estilo de vida al de ellos; pero al fin, vencido por sus reiteradas súplicas, dio su consentimiento. Instauró en aquel monasterio la observancia regular y no permitió a nadie desviarse como antes, por actos ilícitos, ni a derecha ni a izquierda del camino de la perfección. Entonces, los monjes que había recibido bajo su dirección empezaron a acusarse a sí mismos de haberle pedido que les gobernase, pues su vida tortuosa contrastaba con la rectitud de vida del santo.

Viendo que bajo su gobierno no les sería permitido nada ilícito, se lamentaban de tener que, por una parte, renunciar a su forma de vida y, por otra, haber de aceptar normas nuevas con su espíritu envejecido. Y como la vida de los buenos es siempre inaguantable para los malos, empezaron a tratar de cómo le darían muerte. Después de tomar esta decisión, echaron veneno en su vino. Según la costumbre del monasterio, fue presentado al abad, que estaba en la mesa, el jarro de cristal que contenía aquella bebida envenenada para que lo bendijera. Benito levantó la mano y trazó la señal de la cruz, y en el mismo instante el jarro, que estaba algo distante de él, se quebró y quedó roto en tantos pedazos, que más parecía que aquel jarro que contenía la muerte, en vez de recibir la señal de la cruz, hubiera recibido una pedrada.

En seguida comprendió el hombre de Dios que aquel vaso contenía una bebida de muerte, puesto que no había podido soportar la señal de la vida.

Al momento se levantó de la mesa, reunió a los monjes y, con rostro sereno y ánimo tranquilo, les dijo: «Que Dios todopoderoso se apiade de vosotros, hermanos. ¿Por qué quisisteis hacer esto conmigo? ¿Acaso no os lo dije desde el principio, que mi estilo de vida era incompatible con el vuestro? Id a buscar un abad de acuerdo con vuestra forma de vivir, porque en adelante no podréis contar conmigo».

Entonces regresó a su amada soledad y allí vivió consigo mismo, bajo la mirada del celestial Espectador.`,
    },
  },

  // DÍA 5
  {
    dia: 5,
    lecturaEspiritual: {
      titulo: "Del monje distraído vuelto al buen camino",
      fuente: "Vida de San Benito - Capítulo IV",
      contenido: `En uno de aquellos monasterios fundados por él, había un monje que no podía permanecer en oración, sino que no bien los monjes se disponían a orar, él salía fuera del oratorio y se entretenía en cosas terrenas y fútiles.

Después de haber sido amonestado repetidamente por su abad, finalmente fue enviado al hombre de Dios, quien a su vez le reprendió ásperamente por su necedad. Vuelto al monasterio, apenas hizo caso un par de días de la corrección del hombre de Dios, pero al tercer día volvió a su antigua conducta y comenzó de nuevo a divagar durante el tiempo de la oración. Habiéndolo comunicado al hombre de Dios, el abad que él mismo había puesto en el monasterio, dijo: "Iré y le corregiré personalmente".

Fue el hombre de Dios al monasterio, y cuando a la hora señalada, concluida ya la salmodia, los monjes se ocuparon en la oración, vio cómo un chiquillo negro arrastraba hacia fuera por el borde del vestido a aquel monje que no podía estar en oración. Entonces dijo secretamente a Pompeyano, el abad del monasterio, y al monje Mauro: "¿No veis quién es el que arrastra fuera a este monje?". "No", le respondieron. "Oremos, pues, para que también vosotros podáis ver a quién sigue este monje".

Después de haber orado dos días, Mauro lo vio, pero Pompeyano, el abad del monasterio, no pudo verlo. Al tercer día, concluida la oración, al salir del oratorio el hombre de Dios encontró a aquel monje fuera. Y para curar la ceguera de su corazón le golpeó con su bastón, y desde aquel día no volvió a sufrir más engaño alguno de aquel chiquillo negro y perseveró constante en la oración. Así, el antiguo enemigo, como si él mismo hubiera recibido el golpe, no se atrevió en adelante a esclavizar la imaginación de aquel monje.`,
    },
  },

  // DÍA 6
  {
    dia: 6,
    lecturaEspiritual: {
      titulo: "De una ampolla de cristal arrojada a unas rocas, que no se rompió / La tinaja vacía que rebosó de aceite",
      fuente: "Vida de San Benito - Capítulos XXVIII & XXIX",
      contenido: `En aquel tiempo en que el hambre afligía gravemente la región de la Campania, el hombre de Dios distribuyó entre los pobres cuanto había en el monasterio, hasta el punto de no quedar apenas nada en la despensa, fuera de un poco de aceite en una vasija de cristal.

Llegó al monasterio un subdiácono, por nombre Agapito, pidiendo con insistencia que le diesen un poco de aceite. El hombre de Dios, que se había propuesto darlo todo en la tierra para encontrarlo todo en el cielo, ordenó dar al demandante aquel poco de aceite que quedaba. Pero el monje encargado de la despensa, aunque oyó perfectamente la orden, hizo oídos sordos a la misma.

Poco después, preguntó el abad si había dado lo que le había mandado. Respondió que no había dado el aceite, porque de haberlo hecho no habría quedado nada para los monjes. Airado entonces el santo, mandó a otros monjes que arrojasen por la ventana aquella vasija de cristal que contenía un poco de aceite, para que en el monasterio no se guardara nada contra la obediencia. Así se hizo. Debajo de la ventana había un gran precipicio erizado de enormes rocas. Arrojada, pues, la vasija de cristal, cayó sobre las rocas, pero permaneció tan sana como si no la hubieran lanzado; de tal manera que ni se rompió ni se derramó el aceite. Entonces el hombre de Dios mandó subirla y entera como estaba entregarla al subdiácono. Luego reunió a la comunidad y en su presencia reprendió al monje desobediente por su soberbia y poca fe.

LA TINAJA VACÍA QUE REBOSÓ DE ACEITE

Acabada la reprensión, púsose en oración juntamente con los demás monjes. En el mismo lugar donde oraban había una tinaja vacía y cubierta. Como el santo varón prolongara su oración, la tapadera de la tinaja empezó a levantarse, empujada por el aceite que iba subiendo. Al fin cayó la tapadera, y el aceite, desbordándose, comenzó a invadir el pavimento del lugar donde estaban postrados en oración. Al darse cuenta de ello el siervo de Dios Benito, puso en seguida fin a su oración y al punto el aceite dejó de derramarse por el suelo. Entonces amonestó con más insistencia al monje desconfiado y desobediente, para que aprendiese en adelante a tener más fe y humildad.

El monje, saludablemente corregido, quedó ruborizado de ver que el venerable abad había mostrado con milagros el poder de Dios todopoderoso, del que antes le había hablado en la primera amonestación. Y así, no había ya quien dudara de las promesas de aquel que en un instante trocó un vaso de cristal casi vacío en una tinaja rebosante de aceite.`,
    },
  },

  // DÍA 7
  {
    dia: 7,
    lecturaEspiritual: {
      titulo: "Del pan envenenado tirado lejos por un cuervo",
      fuente: "Vida de San Benito - Capítulo VIII - Parte 1",
      contenido: `GREGORIO.- Habiéndose ya inflamado aquellos lugares circunvecinos en el amor de nuestro Dios y Señor Jesucristo, muchos empezaron a dejar la vida del siglo y a someter la cerviz de su corazón al suave yugo del Redentor. Pero como es propio de los malos envidiar en los otros el bien de la virtud que ellos no aprecian, el sacerdote de una iglesia vecina llamado Florencio, abuelo de nuestro subdiácono Florencio, instigado por el antiguo enemigo, empezó a tener envidia del celo de tan santo varón, a denigrar su género de vida y a apartar de su trato a cuantos podía. Mas, viendo por una parte que era imposible impedir sus progresos, y por otra, que cada día crecía más la fama de su vida monástica, de manera que eran muchos los que se sentían llamados incesantemente a una vida más perfecta por la fama de su santidad, abrasado más y más en la llama de la envidia se hacía cada vez peor, porque deseaba recibir la alabanza de su vida monástica, pero no quería llevar una vida santa.

Cegado, pues, por las tinieblas de su envidia, llegó a enviar al siervo de Dios todopoderoso un pan envenenado, como obsequio. Aceptólo el hombre de Dios dándole las gracias, pero no se le ocultó la ponzoña escondida en el pan. A la hora de la comida, solía venir del bosque cercano un cuervo, al que el santo le daba de comer por su propia mano. Habiendo venido como de costumbre, el siervo de Dios echó al cuervo el pan que el sacerdote le había enviado y le ordenó: "En nombre de nuestro Señor Jesucristo toma este pan y arrójalo a un lugar donde no pueda ser hallado por nadie".

Entonces el cuervo, abriendo el pico y extendiendo las alas, empezó a revolotear y a graznar alrededor del pan, como diciendo que estaba dispuesto a obedecer, pero no podía cumplir lo mandado. El siervo de Dios le reiteró la orden, diciendo: "Llévatelo, llévatelo sin miedo y échalo donde nadie pueda encontrarlo". Tardó todavía largo rato el cuervo en ejecutar la orden, pero al fin tomó el pan con su pico, levantó el vuelo y se fue. Al cabo de tres horas, habiendo arrojado ya el pan, regresó y recibió el alimento acostumbrado de mano del hombre de Dios. Pero el venerable abad, viendo que el ánimo del sacerdote se enardecía contra su vida dolióse más por él que por sí mismo.

Mas, el sobredicho Florencio, ya que no pudo matar el cuerpo del maestro, intentó matar las almas de sus discípulos. Para ello, introdujo en el huerto del monasterio donde vivía, a siete muchachas desnudas, para que allí, ante sus ojos, juntando las manos unas con otras y bailando largo rato delante de ellos, inflamaran sus almas en el fuego de la lascivia. Vio el santo varón desde su celda lo que pasaba y temió mucho la caída de sus discípulos más débiles. Mas, considerando que todo aquello se hacía únicamente con ánimo de perseguirle a él, trató de evitar la ocasión de aquella envidia. Y así, constituyó prepósitos en todos aquellos monasterios que había fundado y tomando consigo unos pocos monjes mudó su lugar de residencia.

Pero, apenas el hombre de Dios había rechazado, humildemente, el odio de su adversario, cuando Dios todopoderoso castigó terriblemente a su rival. Pues estando dicho sacerdote en la azotea de su casa, alegrándose con la nueva de la partida de Benito, de pronto; permaneciendo inmóvil toda la casa, se derrumbó la terraza donde estaba, y aplastando al enemigo de Benito, lo mató.

El discípulo del hombre de Dios, Mauro, creyó oportuno hacérselo saber al venerable abad Benito, que aún no se había alejado ni diez millas del lugar, diciéndole: "Regresa, porque el sacerdote que te perseguía ha muerto". Al oír esto el hombre de Dios, prorrumpió en grandes sollozos, no sólo porque su adversario había muerto, sino porque el discípulo se había alegrado de su desastroso fin. Y por eso impuso una penitencia al discípulo, porque al anunciarle lo sucedido se había atrevido a alegrarse de la muerte de su rival.

PEDRO.- Admirables y sobremanera asombrosas son las cosas que acabas de contar, pues en el agua que manó de la piedra veo a Moisés; en el hierro que remontó desde lo profundo del agua, a Elíseo; en el andar sobre las aguas, a Pedro; en la obediencia del cuervo, a Elías y en el llanto por la muerte de su enemigo, a David. Por todo lo cual, veo que este hombre estaba lleno del espíritu de todos los justos.

GREGORIO.- Pedro, el hombre de Dios Benito tuvo únicamente el espíritu de Aquel que por la gracia de la redención que nos otorgó, llenó el corazón de todos los elegidos; del cual dice san Juan: era la luz verdadera que ilumina a todo hombre que viene a este mundo, y más abajo: de su plenitud todos hemos recibido. Los santos alcanzaron de Dios el poder de hacer milagros, pero no el de comunicar este poder a los demás, pues solamente lo concede a sus discípulos, el que prometió dar a sus enemigos la señal de Jonás.`,
    },
  },

  // DÍA 8
  {
    dia: 8,
    lecturaLiturgica: {
      titulo: "El Oficio Divino (I)",
      contenido: `El Oficio Divino es la oración pública y oficial de la Iglesia. Es la santificación del día mediante la alabanza a Dios. Los monjes benedictinos estructuran su jornada en torno a las Horas Canónicas, siguiendo el precepto de San Benito: "Nada debe anteponerse a la Obra de Dios".

Las principales horas del Oficio son:
- Laudes: Al amanecer, alabanza matutina
- Tercia, Sexta, Nona: Horas menores durante el día
- Vísperas: Al atardecer
- Completas: Antes de dormir

Durante este desafío, te invitamos a incorporar al menos Laudes y Completas a tu rutina diaria, uniéndote así a la oración de toda la Iglesia.`,
    },
    lecturaEspiritual: {
      titulo: "San Benito funda Montecasino",
      fuente: "Vida de San Benito - Capítulo VIII - Parte 2",
      contenido: `PEDRO.- Dime ahora, por favor, a qué lugares emigró el santo varón y si obró milagros en ellos.

GREGORIO.- El santo varón, al emigrar a otra parte, cambió de lugar, pero no de enemigo. Ya que después hubo de librar combates tanto más difíciles, cuanto que tuvo que luchar abiertamente contra el maestro de la maldad en persona. El fuerte llamado Casino está situado en la ladera de una alta montaña, que le acoge en su falda como un gran seno, y luego continúa elevándose hasta tres millas de altura, levantando su cumbre hacia el cielo. Hubo allí un templo antiquísimo, en el que según las costumbres de los antiguos paganos, el pueblo necio e ignorante daba culto a Apolo. A su alrededor había también bosques consagrados al culto de los demonios, donde todavía en aquel tiempo una multitud enloquecida de paganos ofrecía sacrificios sacrílegos.

Cuando llegó allí el hombre de Dios, destrozó el ídolo, echó por tierra el ara y taló los bosques. Y en el mismo templo de Apolo construyó un oratorio en honor de san Martín, y donde había estado el altar de Apolo edificó un oratorio a san Juan. Además, con su predicación atraía a la fe a las gentes que habitaban en las cercanías.

Pero he aquí que el antiguo enemigo, no pudiendo sufrir estas cosas en silencio, se aparecía a los ojos del abad, no veladamente o en sueños, sino visiblemente, y con grandes clamores se quejaba de la violencia que tenía que padecer por su causa. Los hermanos, aunque oían su voz, no veían su figura. Pero el venerable abad contaba a sus discípulos cómo el antiguo enemigo se aparecía a sus ojos corporales horrible y envuelto en fuego y le amenazaba echando fuego por la boca y por los ojos. En efecto, todos oían lo que decía, porque primero le llamaba por su nombre, y como el hombre de Dios no le respondía nada, enseguida prorrumpía en ultrajes. Pues cuando gritaba: "¡Benito, Benito!", y veía que éste nada respondía, a continuación añadía: "¡Maldito y no bendito! ¿Qué tienes contra mí? ¿Por qué me persigues?".

Pero veamos ahora los nuevos embates del antiguo enemigo contra el siervo de Dios, a quien incitó presentándole batalla, pero, muy a pesar suyo, con ello no hizo más que proporcionarle ocasiones de nuevas victorias.`,
    },
  },

  // DÍA 9
  {
    dia: 9,
    lecturaEspiritual: {
      titulo: "De una enorme piedra levantada por su oración / Del monje joven aplastado por una pared y sanado",
      fuente: "Vida de San Benito - Capítulos IX & XI",
      contenido: `DE UNA ENORME PIEDRA LEVANTADA POR SU ORACIÓN

Un día, mientras estaban trabajando en la construcción de su propio monasterio, los monjes decidieron poner en el edificio una piedra que había en el centro del terreno. Al no poderla remover dos o tres monjes a la vez, se les juntaron otros para ayudarlos, pero la piedra permaneció inamovible como si tuviera raíces en la tierra. Comprendieron entonces claramente que el antiguo enemigo en persona estaba sentado sobre ella, puesto que los brazos de tantos hombres no eran suficientes para removerla.

Ante la dificultad, enviaron a llamar al hombre de Dios para que viniera y con su oración ahuyentara al enemigo, y así poder luego levantar la piedra. Vino enseguida, oró e impartió la bendición, y al punto pudieron levantar la piedra con tanta rapidez, como si nunca hubiera tenido peso alguno.

DEL MONJE JOVEN APLASTADO POR UNA PARED Y SANADO

En otra ocasión, mientras los monjes estaban levantando una pared, porque así convenía, el hombre de Dios se hallaba en el recinto de su celda entregado a la oración. Apareciósele el antiguo enemigo insultándole y diciéndole que se iba al lugar donde los monjes estaban trabajando. Comunicólo rápidamente el hombre de Dios a los monjes, por medio de un enviado, diciéndoles: "Hermanos, id con cuidado, porque ahora mismo va a vosotros el espíritu del mal". Apenas había acabado de hablar el enviado, cuando el maligno espíritu derrumbó la pared que levantaban, y atrapando entre las ruinas a un monje joven, hijo de un curial, lo aplastó. Consternados todos y profundamente afligidos, no por el daño ocasionado a la pared, sino por el quebrantamiento del hermano, se apresuraron a anunciárselo al venerable Benito con gran llanto.

El abad mandó que le trajeran al muchacho destrozado, cosa que no pudieron hacer sino envolviéndole en una manta, ya que las piedras de la pared le habían triturado no sólo las carnes sino hasta los huesos. El hombre de Dios ordenó enseguida que lo dejasen en su celda sobre el psiathium -es decir, sobre la estera-, donde él solía orar; y despidiendo a los monjes, cerró la puerta de la celda y se puso a orar con más intensidad que nunca. ¡Cosa admirable! Al punto se levantó curado aquel monje y tan sano como antes. Y el santo envió de nuevo a acabar la pared a aquel monje con cuya muerte el antiguo enemigo había creído insultar a Benito.`,
    },
  },

  // DÍA 10
  {
    dia: 10,
    comentario: `Hoy recordamos a Santa Escolástica, hermana de San Benito, con quien compartió la vocación monástica y la santidad.`,
    lecturaEspiritual: {
      titulo: "El milagro de su hermana Escolástica / Cómo vio salir el alma del cuerpo de su hermana",
      fuente: "Vida de San Benito - Capítulos XXXIII & XXXIV",
      contenido: `GREGORIO.- ¿Quién habrá, Pedro, en esta vida más grande que san Pablo? Y sin embargo tres veces rogó al Señor que le librara del aguijón de la carne (2Co 12,8) y no pudo alcanzar lo que deseaba. Por eso, es preciso que te cuente del venerable abad Benito cómo deseó algo y no pudo obtenerlo.

En efecto, una hermana suya, llamada Santa Escolástica, consagrada a Dios todopoderoso desde su infancia, acostumbraba a visitarle una vez al año. Para verla, el hombre de Dios descendía a una posesión del monasterio, situada no lejos de la puerta del mismo. Un día vino como de costumbre y su venerable hermano bajó donde ella, acompañado de algunos de sus discípulos. Pasaron todo el día ocupados en la alabanza divina y en santos coloquios, y al acercarse las tinieblas de la noche tomaron juntos la refección. Estando aún sentados a la mesa entretenidos en santos coloquios, y siendo ya la hora muy avanzada, dicha religiosa hermana suya le rogó: "Te suplico que no me dejes esta noche, para que podamos hablar hasta mañana de los goces de la vida celestial". A lo que él respondió: "¡Qué es lo que dices, hermana! En modo alguno puedo permanecer fuera del monasterio".

Estaba entonces el cielo tan despejado que no se veía en él ni una sola nube. Pero la religiosa mujer, al oír la negativa de su hermano, juntó las manos sobre la mesa con los dedos entrelazados y apoyó en ellas la cabeza para orar a Dios todopoderoso. Cuando levantó la cabeza de la mesa, era tanta la violencia de los relámpagos y truenos y la inundación de la lluvia, que ni el venerable Benito ni los monjes que con él estaban pudieron trasponer el umbral del lugar donde estaban sentados. En efecto, la religiosa mujer, mientras tenía la cabeza apoyada en las manos había derramado sobre la mesa tal río de lágrimas, que trocaron en lluvia la serenidad del cielo. Y no tardó en seguir a la oración la inundación del agua, sino que de tal manera fueron simultáneas la oración y la copiosa lluvia, que cuando fue a levantar la cabeza de la mesa se oyó el estallido del trueno y lo mismo fue levantarla que caer al momento la lluvia. Entonces, viendo el hombre de Dios, que en medio de tantos relámpagos y truenos y de aquella lluvia torrencial no le era posible regresar al monasterio, entristecido, empezó a quejarse diciendo: "¡Que Dios todopoderoso te perdone, hermana! ¿Qué es lo que has hecho?". A lo que ella respondió: "Te lo supliqué y no quisiste escucharme; rogué a mi Señor y él me ha oído. Ahora, sal si puedes. Déjame y regresa al monasterio". Pero no pudiendo salir fuera de la estancia, hubo de quedarse a la fuerza, ya que no había querido permanecer con ella de buena gana. Y así fue cómo pasaron toda la noche en vela, saciándose mutuamente con coloquios sobre la vida espiritual.

Por eso te dije, que quiso algo que no pudo alcanzar. Porque si bien nos fijamos en el pensamiento del venerable varón, no hay duda que deseaba se mantuviera el cielo despejado como cuando había bajado del monasterio, pero contra lo que deseaba se hizo el milagro, por el poder de Dios todopoderoso y gracias al corazón de aquella santa mujer. Y no es de maravillar que, en esta ocasión, aquella mujer que deseaba ver a su hermano pudiese más que él, porque según la sentencia de san Juan: Dios es amor (1Jn 4,16), y con razón pudo más la que amó más (Lc 7,47).

PEDRO.- Ciertamente, me gusta mucho lo que dices.

CÓMO VIO SALIR EL ALMA DEL CUERPO DE SU HERMANA

GREGORIO.- Al día siguiente, la venerable mujer volvió a su morada y el hombre de Dios regresó también al monasterio. Tres días después, estando en su celda con los ojos levantados al cielo, vio el alma de su hermana, que saliendo de su cuerpo en forma de paloma penetraba en lo más alto del cielo. Gozándose con ella de tan gran gloria, dio gracias a Dios todopoderoso con himnos de alabanza y anunció su muerte a los monjes, a quienes envió en seguida para que trajeran su cuerpo al monasterio y lo depositaran en el sepulcro que había preparado para sí. De esta manera, ni la tumba pudo separar los cuerpos de aquellos cuyas almas habían estado siempre unidas en el Señor.`,
    },
  },

  // DÍA 11
  {
    dia: 11,
    lecturaEspiritual: {
      titulo: "Del pensamiento de soberbia de un monje, conocido en espíritu",
      fuente: "Vida de San Benito - Capítulo XX",
      contenido: `En otra ocasión, mientras el venerable abad tomaba su alimento hacia el atardecer, cierto monje, hijo de un abogado, le sostenía la lámpara delante de la mesa. Y mientras el hombre de Dios comía y él le alumbraba, comenzó a pensar y decir secretamente en su interior: "¿Quién es éste para que yo tenga que servirle y sostenerle la lámpara mientras come? ¿Y siendo yo quien soy, he de servirle?". Al punto, dirigiéndose a él el hombre de Dios, comenzó a increparle ásperamente, diciéndole: "¡Santigua tu corazón, hermano! ¿Qué es lo que estás pensando? ¡Santigua tu corazón!". Inmediatamente llamó a los monjes, mandó que le quitasen la lámpara de sus manos, y a él le ordenó que cesara en su servicio y se sentara.

Preguntado luego por los monjes qué es lo que había pensado, les contó prolijamente cómo se había envanecido por espíritu de soberbia y lo que había dicho interiormente en su pensamiento contra el hombre de Dios. Con esto, todos vieron claramente que nada podía ocultarse al venerable Benito, pues había percibido hasta un simple discurso mental.`,
    },
  },

  // DÍA 12
  {
    dia: 12,
    lecturaEspiritual: {
      titulo: "De unos monjes que tomaron alimento contra lo establecido por la Regla / Del hermano del monje Valentiniano",
      fuente: "Vida de San Benito - Capítulos XII & XIII",
      contenido: `En esto empezó el hombre de Dios a tener también espíritu de profecía, prediciendo sucesos futuros y revelando a los presentes cosas que sucedían lejos.

Era costumbre en el cenobio, que cuando los monjes salieran a hacer alguna diligencia, no comieran ni bebieran fuera del monasterio. Este punto de la observancia se guardaba escrupulosamente, según lo establecido por la Regla. Un día salieron unos monjes a cumplir cierto encargo, en el que estuvieron ocupados hasta muy tarde. Y como conocían a cierta piadosa mujer, entraron en su casa y tomaron alimento. Llegaron muy tarde al monasterio y, según la costumbre, pidieron la bendición al abad. Éste les interpeló al punto diciendo: "¿Dónde habéis comido?". "En ninguna parte", respondieron ellos. Pero él les reprochó: "¿Por qué mentís de ese modo? ¿Acaso no entrasteis en casa de tal mujer y comisteis allí tal y tal cosa y bebisteis tantas veces?". Cuando vieron que el venerable abad les iba refiriendo la hospitalidad de la mujer, la clase de manjares que habían comido y el número de veces que habían bebido, reconocieron todo lo que habían hecho, y temblando cayeron a sus pies y confesaron su culpa. Pero él al instante los perdonó, creyendo que en adelante no volverían a hacer semejante cosa, pues sabían que, aun ausente, les estaba presente en espíritu.

DEL HERMANO DEL MONJE VALENTINIANO

El hermano del monje Valentiniano, de quien más arriba hice mención, era un hombre seglar, pero muy piadoso. Para encomendarse a las oraciones del siervo de Dios y ver a su hermano, acostumbraba a ir todos los años en ayunas al monasterio desde el lugar donde vivía. Cierto día, yendo de camino hacia el monasterio, se le juntó otro caminante que llevaba consigo comida para el viaje. Siendo ya la hora avanzada, le dijo: "Ven, hermano, tomemos alimento para no desfallecer en el camino". A lo que respondió aquél: "De ninguna manera, hermano; no lo tomaré, porque he tenido siempre la costumbre de ir en ayunas a visitar al venerable Benito". Recibida esta respuesta, el compañero de viaje no insistió más por el momento. Pero habiendo andado otro pequeño trecho, invitóle de nuevo a comer. Tampoco esta vez quiso aceptar, porque había hecho propósito de llegar en ayunas. Calló nuevamente el que le había invitado a comer y consintió en caminar con él todavía un poco más sin probar alimento. Pero después de haber recorrido un largo trecho, cuando la hora era ya avanzada y los viajeros estaban fatigados, encontraron a la vera del camino un prado con una fuente y con todo lo que podía parecerles a propósito para reparar sus fuerzas. Entonces díjole el compañero de viaje: "Aquí hay agua, un prado y un lugar ameno donde podemos comer y descansar un poco, para que luego podamos acabar nuestro viaje sin novedad".

Como estas palabras halagaron sus oídos y el lugar sus ojos, persuadido por esta tercera invitación, aceptó y comió. Al anochecer llegó al monasterio; presentóse al venerable abad Benito y le pidió la bendición. Pero al instante el santo varón le reprochó lo que había hecho en el camino, diciéndole: "¿Cómo ha sido, hermano, que el maligno enemigo, que te habló por boca de tu compañero de viaje, no pudo persuadirte la primera vez ni tampoco la segunda, pero logró persuadirte a la tercera y te venció en lo que quería?". Entonces él, reconoció su culpa, fruto de su débil voluntad; se echó a sus pies y comenzó a llorar avergonzado de su falta, tanto más cuanto que se dio cuenta que, aunque ausente, había prevaricado a la vista del abad Benito.

PEDRO.- Veo que en el corazón de este santo varón había el espíritu de Elíseo, que aunque estaba lejos, estuvo presente a lo que su discípulo Guejazi hacía (2Re 5,26).`,
    },
  },

  // DÍA 13
  {
    dia: 13,
    comentario: `Estamos a pocos días de iniciar la Cuaresma, e intensificar este camino que iniciamos en Septuagésima. Vayamos rezando y consultando a nuestro director espiritual o confesor, para seleccionar 3 sacrificios para ofrecer durante los 40 días de la Cuaresma.

En la app, en la sección de ajustes, en el apartado de "Realitas" podrán seleccionarlas para ir recordando y marcando todos los días a partir del miércoles de cenizas.`,
    lecturaEspiritual: {
      titulo: "Descubrimiento del engaño del rey Totila / Profecía que hizo al rey Totila",
      fuente: "Vida de San Benito - Capítulos XIV & XV",
      contenido: `GREGORIO.- Ahora, Pedro, es necesario que calles un poco, para que puedas conocer aún mayores cosas.

En tiempo de los godos, su rey Totila oyó decir que el santo varón tenía espíritu de profecía. Dirigióse a su monasterio y deteniéndose a poca distancia del mismo, le anunció su visita. Enseguida se le pasó aviso del monasterio, diciéndole que podía venir, pero él, pérfido como era, intentó cerciorarse de si el hombre de Dios tenía espíritu de profecía. Para ello, prestó su calzado a cierto escudero suyo llamado Rigo, le hizo vestir con la indumentaria real y le mandó que se presentara al hombre de Dios como si fuera él mismo en persona. Envió para su séquito a tres compañeros de los que solían ir en su comitiva, a saber: Vulderico, Rodrigo y Blidino, para que formando cortejo con él hicieran creer al siervo de Dios que se trataba del mismo rey Totila. Dióle además otros honores y acompañamiento, para que tanto por el séquito como por los vestidos de púrpura le tuviese por el propio rey.

Cuando Rigo llegó al monasterio ostentando las vestiduras reales y rodeado de numeroso séquito, el hombre de Dios estaba sentado a la puerta. Vio cómo iba acercándose y cuando podía ya hacerse oír de él, gritó diciendo: "¡Quítate eso, hijo, quítate eso que llevas, que no es tuyo!". Al instante Rigo cayó en tierra lleno de espanto por haber intentado burlarse de tan santo varón; y todos los que con él habían ido a ver al hombre de Dios, cayeron consternados en tierra. Al levantarse, no se atrevieron a acercársele, sino que regresaron adonde estaba su rey y temblando le contaron la rapidez con que habían sido descubiertos.

PROFECÍA QUE HIZO AL REY TOTILA

Entonces el rey Totila en persona llegóse al hombre de Dios, y viéndole a lo lejos sentado no se atrevió a acercársele, sino que cayó de hinojos en tierra. El hombre de Dios le dijo dos o tres veces: "¡Levántate!". Pero como él no se atrevía a levantarse en su presencia, Benito, siervo de nuestro Señor Jesucristo, se dignó acercarse al rey -que permanecía postrado-, le levantó, le increpó por sus desmanes y en pocas palabras le vaticinó todo cuanto había de sucederle. Le dijo: "Has hecho y haces mucho daño; es ya hora de poner término a tu maldad. Ciertamente, entrarás en Roma, atravesarás el mar y reinarás nueve años, pero al décimo morirás". Oídas estas palabras, el rey quedó fuertemente impresionado, le pidió la bendición y se marchó. Y desde entonces fue menos cruel. Poco tiempo después entró en Roma, pasó luego a Sicilia y al décimo año de su reinado, por disposición de Dios todopoderoso, perdió el reino con la vida.

También el obispo de la iglesia de Canosa, a quien el hombre de Dios amaba entrañablemente por los méritos de su vida ejemplar, acostumbraba a visitar al siervo de Dios. Un día, conversando con él acerca de la entrada del rey Totila en Roma y de la devastación de la ciudad, díjole el obispo: "Este rey destruirá de tal manera la ciudad, que ya no podrá ser jamás habitada". A lo que respondió el hombre de Dios: "Roma no será destruida por los hombres, sino que se consumirá en sí misma, abatida por tempestades, huracanes, tormentas y terremotos".

Los misterios de esta profecía nos son ya más patentes que la luz, puesto que vemos demolidas las murallas de la ciudad, arruinadas sus casas, destruidas sus iglesias por los huracanes y que se van desmoronando sus edificios, como cansados por una larga vejez.

Su discípulo Honorato, de quien es la relación de todo lo que voy diciendo, confiesa que esto no lo oyó de su boca, pero afirma que los monjes le aseguraron que así lo había dicho el santo.`,
    },
  },

  // DÍA 14
  {
    dia: 14,
    lecturaEspiritual: {
      titulo: "De un clérigo librado del demonio",
      fuente: "Vida de San Benito - Capítulo XVI",
      contenido: `En este tiempo, cierto clérigo de la iglesia de Aquino, era atormentado por el demonio. Había sido enviado por el venerable varón Constancio, obispo de la misma iglesia, a visitar muchos sepulcros de mártires, a fin de obtener de ellos la curación. Pero los santos mártires no quisieron concederle la salud, para que con este motivo se manifestara la santidad de Benito.

Así pues, fue conducido a la presencia del siervo de Dios Benito, que oró a nuestro Señor Jesucristo y al momento expulsó al antiguo enemigo del hombre poseso. Después de haberle curado le ordenó: "Ve, y en lo sucesivo no comas carne ni te atrevas jamás a recibir orden sagrada alguna, porque el día que intentares temerariamente acceder a orden sacro alguno, al instante volverás a ser esclavo de Satanás".

Marchó, pues, el clérigo curado, y como la pena reciente suele atemorizar al espíritu, cumplió por el momento lo que el hombre de Dios le había ordenado. Pero transcurridos muchos años, cuando vio que los que le habían precedido habían muerto y que otros más jóvenes que él recibían las órdenes sagradas, no acordándose de las palabras del hombre de Dios por el largo tiempo transcurrido, hizo caso omiso de ellas, acercándose a recibir otra orden sagrada. Inmediatamente tomó posesión de él aquel demonio que le había dejado y no cesó de atormentarle hasta que le quitó la vida.

PEDRO.- Por lo que veo, este hombre de Dios penetró hasta los secretos de la divinidad, puesto que sabía que este clérigo había sido entregado a Satanás, precisamente para que no osara recibir orden sagrada alguna.

GREGORIO.- ¿Cómo no iba a conocer los secretos de la divinidad, el que guardaba tan fielmente los preceptos del mismo Dios, estando como está escrito que: El que se adhiere al Señor, se hace un espíritu con él? (1 Co 6,17).

PEDRO.- Si el que se adhiere al Señor se hace un mismo espíritu con él, ¿por qué el mismo egregio predicador dice también: Quién conoció el pensamiento del Señor, o quién fue su consejero? (Rom 11,34). Pues parece ilógico que uno ignore el pensamiento de aquel con el cual ha sido hecho un solo espíritu.

GREGORIO.- Los hombres santos, en cuanto son una misma cosa con el Señor, no ignoran su pensamiento, pues también el mismo Apóstol dice: ¿Qué hombre conoce lo que en el hombre hay, sino el espíritu del hombre que está en él? Así también, nadie conoce las cosas de Dios sino el Espíritu de Dios (1Co 2,11). Y para mostrarnos que conocía las cosas de Dios, añadió: Nosotros no hemos recibido el espíritu de este mundo, sino el espíritu de Dios (1Co 2,12). Por eso dice también: Lo que ni el ojo vio ni el oído oyó, ni imaginó el corazón del hombre, eso es lo que Dios tiene preparado para los que le aman; pero a nosotros nos lo ha revelado por su Espíritu (1 Co 2,9).

PEDRO.- Si, pues, las cosas que son de Dios fueron reveladas al mismo Apóstol por el Espíritu de Dios, ¿cómo responde a lo que propuse antes, diciendo: ¡Oh profundidad de la riqueza, de la sabiduría y de la ciencia de Dios! ¡Cuán insondables son sus juicios e inescrutables sus caminos! (Rm 11,33). Además de esto, me viene ahora a la mente otra duda. Pues el profeta David, hablando con el Señor, dice: Con mis labios he pronunciado todos los juicios de tu boca (Sal 119,13). Y como conocer es menor que pronunciar, ¿por qué afirma san Pablo que los juicios de Dios son inescrutables, cuando David asegura, no sólo que los conoce, sino también que los ha pronunciado con sus labios?

GREGORIO.- A ambas cosas te respondí brevemente más arriba, cuando te dije que los hombres santos, en cuanto son una misma cosa con el Señor, no ignoran su pensamiento. En efecto, todos los que siguen devotamente al Señor están unidos a Dios por su devoción, pero mientras están abrumados por el peso de la carne corruptible, no están aún junto a Dios. Y así, en cuanto le están unidos, conocen los ocultos designios de Dios, y en cuanto están separados de él, los ignoran. Por eso, en tanto no penetran aún perfectamente sus secretos aseguran que sus juicios son incomprensibles, pero en cuanto se adhieren a él por el espíritu, y por esta unión, instruidos por las palabras de la Sagrada Escritura o por secretas revelaciones, reciben algún conocimiento, entonces saben estas cosas y las anuncian. Así, pues, ignoran lo que Dios calla y conocen lo que les habla. Por eso cuando el profeta David dijo: Con mis labios pronuncié todos tus decretos, añadió a continuación: salidos de tu boca (Sal 119,13); como si dijera abiertamente: "Pude conocer y proclamar estos decretos, porque tú los proferiste. Puesto que aquellas cosas que tú no dices, por lo mismo las ocultas a nuestra inteligencia". Concuerda, pues, la sentencia del Profeta y la del Apóstol, porque si es cierto que los juicios de Dios son inescrutables, también lo es que una vez han sido proferidos por su boca, pueden ser pronunciados por labios humanos, porque lo que Dios revela puede ser conocido, pero no lo que oculta.

PEDRO.- Has resuelto esta pequeña objeción mía con razones bien claras. Pero, te ruego, que prosigas, si tienes algo que decir aún sobre los milagros de este varón.`,
    },
  },

  // DÍA 15
  {
    dia: 15,
    lecturaLiturgica: {
      titulo: "El Oficio Divino (II)",
      contenido: `FINES DEL OFICIO DIVINO

Por los elementos o piezas constitutivas del Oficio Divino, que son: lecturas, salmos, alocuciones y peticiones, podemos distinguir en él cuatro fines extrínsecos, a saber:
el "latréutico", representado oficialmente por los salmos;
el "impetratorio", por las peticiones;
el "didáctico", por las lecturas;
y el "moral", por las alocuciones.

Efectivamente, la Iglesia, por medio del Oficio Divino, alaba (fin latréutico), pide (fin impetratorio), enseña (fin didáctico) y exhorta (fin moral).

Con el fin "latréutico" se propone la Iglesia promover la gloria de Dios; con el "impetratorio", el bien de la Iglesia y del mundo en general; con el "didáctico", la instrucción de los que rezan o cantan; con el "moral", la santificación de todos; cosas todas éstas extrínsecas al rezo del Oficio, y materia, por consiguiente, de esos cuatro fines extrínsecos.

Pero además de estos fines extrínsecos, el Oficio Divino tiene otros intrínsecos, uno de los cuales, que podríamos llamar eucarístico, merece señalarse entre otros. El Oficio Divino, en efecto, tiene la misión sublime de preparar y continuar la Acción del Sacrificio de la Misa y de rodear este rito de pompa y majestad.

SU EFICACIA

La eficacia del Oficio Divino para adorar y alabar a Dios como se merece (fin "latréutico"), si bien no es infinita, como lo es la de la Misa, es, sin embargo, incomparablemente mayor que la que pueden tener todas nuestras oraciones y homenajes privados.

Ello es así, en primer lugar, porque las alabanzas que tributamos a Dios en el Oficio Divino han sido elegidas y dictadas por el Espíritu Santo; además, porque la voz que pronuncia esas alabanzas es la voz de la Esposa de Jesucristo, la Iglesia, voz santa, voz dulcísima y entre todas la más agradable a los oídos del celestial Esposo.

EL OFICIO DIVINO PIDE LA DEVOCIÓN INTERIOR

En el Oficio Divino —dice San Agustín— "ora Jesús por nosotros como nuestro Sacerdote, ora en nosotros como nuestra Cabeza, es invocado por nosotros como nuestro Dios". Y añade Pío XII: "A la excelsa dignidad de esta oración de la Iglesia debe corresponder la intensa devoción de nuestra alma. Y puesto que la voz del orante repite los cánticos escritos por inspiración del Espíritu Santo, que exaltan y proclaman la perfectísima grandeza de Dios, es también necesario que a esta voz acompañe el movimiento interior de nuestro espíritu…, según dice San Benito: Salmódiemos de tal forma que nuestra mente concuerde con nuestra voz".

VÍSPERAS

Los piadosos israelitas, a ejemplo del rey David, se reunían por la tarde en el templo de Jerusalén para asistir al Sacrificio vespertino, que consistía en la inmolación de un cordero. Igual que los israelitas, se congregaban al atardecer los primitivos cristianos para ofrecer al Señor el sacrificio de sus alabanzas. Las Vísperas corresponden, en el Oficio diurno, a los Laudes del nocturno, y por eso guardan con éstos gran analogía.`,
    },
    lecturaEspiritual: {
      titulo: "Del monje que al marcharse del monasterio contra la voluntad de Benito",
      fuente: "Vida de San Benito - Capítulo XXV",
      contenido: `GREGORIO.- Un monje suyo, proclive a la inconstancia, no quería perseverar en el monasterio. Y aunque el hombre de Dios le corregía asiduamente y le amonestaba con frecuencia, de ningún modo quería permanecer más en la comunidad y se empeñaba con importunos ruegos a que le dejara marchar.

Un día, cansado ya el venerable abad de tanta impertinencia, le mandó airado que se fuese. No bien hubo abandonado el monasterio, cuando le salió al encuentro un dragón, que abriendo sus fauces contra él amenazaba con devorarle. Entonces, tembloroso y jadeante empezó a gritar con fuerte voz: "¡Corred, corred, que este dragón quiere devorarme!". Acudieron rápidamente los monjes; no vieron al dragón, pero condujeron al monasterio al monje, despavorido y tembloroso, quien en seguida hizo promesa de no abandonar jamás el monasterio. Y desde aquel momento permaneció constante en su promesa, gracias a que por las oraciones del santo varón había podido ver a aquel dragón que quería devorarle y al que antes seguía sin ver.`,
    },
  },

  // DÍA 16
  {
    dia: 16,
    lecturaEspiritual: {
      titulo: "De doscientos modios de harina hallados delante del monasterio",
      fuente: "Vida de San Benito - Capítulo XXI",
      contenido: `En otra ocasión, sobrevino en la región de la Campania una gran hambre que afligía a todo el mundo por la falta de alimentos. Empezaba también ya a escasear el trigo en el monasterio de Benito y se habían consumido casi todos los panes, de tal manera que a la hora de la refección de los monjes sólo pudieron hallarse cinco. Viéndolos el venerable abad contristados, trató primero de corregir con suave reprensión su pusilanimidad y luego de animarlos con esta promesa, diciendo: "¿Por qué está triste vuestro corazón por la falta de pan? Hoy ciertamente hay poco, pero mañana lo tendréis en abundancia". Al día siguiente encontraron delante de la puerta del monasterio doscientos modios de harina metidos en sacos, sin que hasta el día de hoy se haya podido saber de quién se valió Dios todopoderoso para llevarlos allí. Viendo esto, los monjes alabaron a Dios y aprendieron a no dudar más de la abundancia, aun en tiempo de escasez.

PEDRO.- Dime, por favor, si este siervo de Dios tenía siempre espíritu de profecía o si este espíritu invadía su alma sólo de vez en cuando.

GREGORIO.- El espíritu de profecía, Pedro, no está continuamente inspirando la mente de los profetas, porque si el Espíritu Santo, según está escrito, inspira donde quiere (Jn 3,8), también has de saber que inspira cuando quiere. Por eso, preguntado el profeta Natán por el rey David, si podía construir el templo, primeramente le dijo que sí y luego que no (2Sam 7,17). Y por lo mismo, cuando el profeta Eliseo vio llorar a la mujer sunamita, sin conocer la causa de su llanto, dijo al criado que la impedía acercarse: Déjala, porque su alma está llena de amargura y el Señor me lo ha ocultado y no me lo ha revelado (2Re 4,27). Dios todopoderoso actúa así por disposición de su soberana bondad, porque unas veces da el espíritu de profecía y otras lo retira, eleva las almas de los profetas a las alturas y al mismo tiempo las mantiene en la humildad, para que vean lo que son por la gracia de Dios, cuando reciben este espíritu, y lo que son por sí mismos, cuando les falta.

PEDRO.- Que es así como dices, lo manifiesta tu mismo razonamiento. Pero cuéntame por favor, todo lo que sepas del venerable abad Benito.`,
    },
  },

  // DÍA 17
  {
    dia: 17,
    lecturaEspiritual: {
      titulo: "Que escribió una Regla monástica",
      fuente: "Vida de San Benito - Capítulo XXXVI",
      contenido: `GREGORIO.- Con gusto, Pedro, seguiría contándote cosas de este venerable abad, pero algunas las omitiré adrede, porque tengo prisa en contar los hechos de otros personajes. Con todo, no quiero que ignores que el hombre de Dios, no sólo resplandeció en el mundo por sus muchos milagros, sino que también brilló, y de una manera bastante luminosa, por su doctrina, pues escribió una Regla para monjes, notable por su discreción y clara en su lenguaje. El que quiera conocer con más detalle su vida y costumbres, podrá encontrar en las ordenaciones de esta Regla todo lo que enseñó con el ejemplo, pues el santo varón de ningún modo pudo enseñar otra cosa sino lo que había vivido.`,
    },
  },

  // DÍA 18
  {
    dia: 18,
    comentario: `A partir de hoy comienza una segunda etapa de este itinerario, en la cual vamos a buscar aumentar la intensidad de nuestras oraciones y penitencias, en una preparación más próxima para la Pascua. Recordemos seleccionar los 3 sacrificios que ofreceremos a Dios durante estos 40 días.

En la app, en la sección de ajustes, en el apartado de "Realitas" podrán seleccionarlas para ir recordando y marcando todos los días a partir del miércoles de cenizas.

Por otra parte, respecto al pilar de "Lectio", también damos inicio a esta segunda etapa. A partir de este día y hasta la semana santa, iremos leyendo y meditando la obra magna del patrono de Europa, "La Regla". La sabiduría de este libro, escrito entre los años 516-530 d.C, hace que tras 1500 años siga siendo utilizado hoy en día. Su vigencia, denota la prudencia del santo que fue capaz de escribir una norma adaptable a múltiples tiempos y geografías. E incluso como iremos descubriendo al leerla, tiene mucho para decirnos hoy en día a cada uno de nosotros.`,
    lecturaLiturgica: {
      titulo: "Miércoles de Ceniza",
      contenido: `La Cuaresma propiamente dicha empieza el primer domingo de Cuaresma, pero en cuanto a los ayunos y abstinencias comienza el Miércoles de Ceniza. Su objeto es preparar dignamente la celebración anual de la Pasión, Muerte y Resurrección del Salvador, y prepáralas con una más intensa oración, con prácticas de penitencia, con exhortaciones apremiantes a la conversión, con obras de misericordia y con lecturas bíblicas y patrísticas conmovedoras, de las que ofrecen un riquísimo mosaico tanto el Breviario como el Misal cuaresmales.

Antiguamente preocupaban especialmente a la Iglesia, durante la Cuaresma la preparación de los catecúmenos para el bautismo solemne y la reconciliación de los pecadores y penitentes públicos; hoy su preocupación principal es el CUMPLIMIENTO PASCUAL y la recristianización de la sociedad cristiana, tendiente siempre a paganizarse.

En lo posible asistamos a Misa hoy y recibamos la imposición de las cenizas que nos recuerda que somos polvo, "Meménto, homo, qui pulvis es, et in púlverem revertéris".`,
    },
    lecturaEspiritual: {
      titulo: "Prólogo de la Regla",
      fuente: "Regla de San Benito - Prólogo",
      contenido: `Escucha, hijo, los preceptos del Maestro, e inclina el oído de tu corazón; recibe con gusto el consejo de un padre piadoso, y cúmplelo verdaderamente. Así volverás por el trabajo de la obediencia, a Aquel de quien te habías alejado por la desidia de la desobediencia. Mi palabra se dirige ahora a ti, quienquiera que seas, que renuncias a tus propias voluntades y tomas las preclaras y fortísimas armas de la obediencia, para militar por Cristo Señor, verdadero Rey.

Ante todo pídele con una oración muy constante que lleve a su término toda obra buena que comiences, para que Aquel que se dignó contarnos en el número de sus hijos, no tenga nunca que entristecerse por nuestras malas acciones. En todo tiempo, pues, debemos obedecerle con los bienes suyos que Él depositó en nosotros, de tal modo que nunca, como padre airado, desherede a sus hijos, ni como señor temible, irritado por nuestras maldades, entregue a la pena eterna, como a pésimos siervos, a los que no quisieron seguirle a la gloria.

Levantémonos, pues, de una vez, ya que la Escritura nos exhorta y nos dice: "Ya es hora de levantarnos del sueño" (Rm 13,11). Abramos los ojos a la luz divina, y oigamos con oído atento lo que diariamente nos amonesta la voz de Dios que clama diciendo: "Si oyeren hoy su voz, no endurezcan sus corazones" (Sal 94,8). Y otra vez: "El que tenga oídos para oír (Mt 11,15), escuche lo que el Espíritu dice a las iglesias" (Ap 2,7). ¿Y qué dice? "Vengan, hijos, escúchenme, yo les enseñaré el temor del Señor" (Sal 33,12). "Corran mientras tienen la luz de la vida, para que no los sorprendan las tinieblas de la muerte" (Jn 12,35).

Y el Señor, que busca su obrero entre la muchedumbre del pueblo al que dirige este llamado, dice de nuevo: "¿Quién es el hombre que quiere la vida y desea ver días felices?" (Sal 33,13). Si tú, al oírlo, respondes "Yo", Dios te dice: "Si quieres poseer la vida verdadera y eterna, guarda tu lengua del mal, y que tus labios no hablen con falsedad. Apártate del mal y haz el bien; busca la paz y síguela" (Sal 33,14s). Y si hacen esto, pondré mis ojos sobre ustedes, y mis oídos oirán sus preces, y antes de que me invoquen les diré: "Aquí estoy". ¿Qué cosa más dulce para nosotros, carísimos hermanos, que esta voz del Señor que nos invita? Vean cómo el Señor nos muestra piadosamente el camino de la vida.

Ciñamos, pues, nuestra cintura con la fe y la práctica de las buenas obras, y sigamos sus caminos guiados por el Evangelio, para merecer ver en su reino a Aquel que nos llamó.

Si queremos habitar en la morada de su reino, puesto que no se llega allí sino corriendo con obras buenas, preguntemos al Señor con el Profeta diciéndole: "Señor, ¿quién habitará en tu morada, o quién descansará en tu monte santo?" (Sal 14,1). Hecha esta pregunta, hermanos, oigamos al Señor que nos responde y nos muestra el camino de esta morada diciendo: "El que anda sin pecado y practica la justicia; el que dice la verdad en su corazón y no tiene dolo en su lengua; el que no hizo mal a su prójimo ni admitió que se lo afrentara" (Sal 14,2s). El que apartó de la mirada de su corazón al maligno diablo tentador y a la misma tentación, y lo aniquiló, y tomó sus nacientes pensamientos y los estrelló contra Cristo.

Por eso dice también el Señor en el Evangelio: "Al que oye estas mis palabras y las practica, lo compararé con un hombre prudente que edificó su casa sobre piedra; vinieron los ríos, soplaron los vientos y embistieron contra aquella casa, pero no se cayó, porque estaba fundada sobre piedra" (Mt 7,24s).

Vamos, pues, a instituir una escuela del servicio divino, y al hacerlo, esperamos no establecer nada que sea áspero o penoso. Pero si, por una razón de equidad, para corregir los vicios o para conservar la caridad, se dispone algo más estricto, no huyas enseguida aterrado del camino de la salvación, porque éste no se puede emprender sino por un comienzo estrecho. Mas cuando progresamos en la vida monástica y en la fe, se dilata nuestro corazón, y corremos con inefable dulzura de caridad por el camino de los mandamientos de Dios. De este modo, no apartándonos nunca de su magisterio, y perseverando en su doctrina en el monasterio hasta la muerte, participemos de los sufrimientos de Cristo por la paciencia, a fin de merecer también acompañarlo en su reino. Amén.`,
    },
  },

  // DÍA 19
  {
    dia: 19,
    comentario: `El día de hoy leeremos completo el capítulo IV, de "Los instrumentos de las buenas obras". Lo leamos con atención, y dado que son 74, pongamos empeño diariamente en meditar en el que recibimos al iniciar cada día.`,
    lecturaEspiritual: {
      titulo: "Los instrumentos de las buenas obras",
      fuente: "Regla de San Benito - Capítulo IV",
      contenido: `1 Primero, amar al Señor Dios con todo el corazón, con toda el alma y con todas las fuerzas;
2 después, al prójimo como a sí mismo.
3 Luego, no matar;
4 no cometer adulterio,
5 no hurtar,
6 no codiciar,
7 no levantar falso testimonio,
8 honrar a todos los hombres,
9 no hacer a otro lo que uno no quiere para sí.
10 Negarse a sí mismo para seguir a Cristo.
11 Castigar el cuerpo,
12 no entregarse a los deleites,
13 amar el ayuno.
14 Alegrar a los pobres,
15 vestir al desnudo,
16 visitar al enfermo,
17 sepultar al muerto.
18 Socorrer al atribulado,
19 consolar al afligido.
20 Hacerse extraño al proceder del mundo,
21 no anteponer nada al amor de Cristo.
22 No ceder a la ira,
23 no guardar rencor.
24 No tener dolo en el corazón,
25 no dar paz falsa.
26 No abandonar la caridad.
27 No jurar, no sea que acaso perjure,
28 decir la verdad con el corazón y con la boca.
29 No devolver mal por mal.
30 No hacer injurias, sino soportar pacientemente las que le hicieren.
31 Amar a los enemigos.
32 No maldecir a los que lo maldicen, sino más bien bendecirlos.
33 Sufrir persecución por la justicia.
34 No ser soberbio,
35 ni aficionado al vino,
36 ni glotón,
37 ni dormilón,
38 ni perezoso,
39 ni murmurador,
40 ni detractor.
41 Poner su esperanza en Dios.
42 Cuando viere en sí algo bueno, atribúyalo a Dios, no a sí mismo;
43 en cambio, sepa que el mal siempre lo ha hecho él, e impúteselo a sí mismo.
44 Temer el día del juicio,
45 sentir terror del infierno,
46 desear la vida eterna con la mayor avidez espiritual,
47 tener la muerte presente ante los ojos cada día.
48 Velar a toda hora sobre las acciones de su vida,
49 saber de cierto que, en todo lugar, Dios lo está mirando.
50 Estrellar inmediatamente contra Cristo los malos pensamientos que vienen a su corazón, y manifestarlos al anciano espiritual,
51 guardar su boca de conversación mala o perversa,
52 no amar hablar mucho,
53 no hablar palabras vanas o que mueven a risa,
54 no amar la risa excesiva o destemplada.
55 Oír con gusto las lecturas santas,
56 darse frecuentemente a la oración,
57 confesar diariamente a Dios en la oración, con lágrimas y gemidos, las culpas pasadas,
58 enmendarse en adelante de esas mismas faltas.
59 No ceder a los deseos de la carne,
60 odiar la propia voluntad,
61 obedecer en todo los preceptos del abad, aun cuando él -lo que no suceda- obre de otro modo, acordándose de aquel precepto del Señor: "Hagan lo que ellos dicen, pero no hagan lo que ellos hacen" (Mt 23,3).
62 No querer ser llamado santo antes de serlo, sino serlo primero para que lo digan con verdad.
63 Poner por obra diariamente los preceptos de Dios,
64 amar la castidad,
65 no odiar a nadie,
66 no tener celos,
67 no tener envidia,
68 no amar la contienda,
69 huir la vanagloria.
70 Venerar a los ancianos,
71 amar a los más jóvenes.
72 Orar por los enemigos en el amor de Cristo;
73 reconciliarse antes de la puesta del sol con quien se haya tenido alguna discordia.
74 Y no desesperar nunca de la misericordia de Dios.

Estos son los instrumentos del arte espiritual. Si los usamos día y noche, sin cesar, y los devolvemos el día del juicio, el Señor nos recompensará con aquel premio que Él mismo prometió: "Ni el ojo vio, ni el oído oyó, ni llegó al corazón del hombre lo que Dios ha preparado a los que lo aman" (1 Co 2,9). El taller, empero, donde debemos practicar con diligencia todas estas cosas, es el recinto del monasterio y la estabilidad en la comunidad.`,
    },
  },

  // DÍA 20
  {
    dia: 20,
    lecturaEspiritual: {
      titulo: "La obediencia",
      fuente: "Regla de San Benito - Capítulo V",
      contenido: `El primer grado de humildad es una obediencia sin demora. Esta es la que conviene a aquellos que nada estiman tanto como a Cristo. Ya sea en razón del santo servicio que han profesado, o por el temor del infierno, o por la gloria de la vida eterna, en cuanto el superior les manda algo, sin admitir dilación alguna, lo realizan como si Dios se lo mandara. El Señor dice de éstos: "En cuanto me oyó, me obedeció" (Sal 17,45). Y dice también a los que enseñan: "El que a ustedes oye, a mí me oye" (Lc 10,16). Estos tales, dejan al momento sus cosas, abandonan la propia voluntad, desocupan sus manos y dejan sin terminar lo que estaban haciendo, y obedeciendo a pie juntillas, ponen por obra la voz del que manda. Y así, en un instante, con la celeridad que da el temor de Dios, se realizan como juntamente y con prontitud ambas cosas: el mandato del maestro y la ejecución del discípulo. Es que el amor los incita a avanzar hacia la vida eterna. Por eso toman el camino estrecho del que habla el Señor cuando dice: "Angosto es el camino que conduce a la vida" (Mt 7,14). Y así, no viven a su capricho ni obedecen a sus propios deseos y gustos, sino que andan bajo el juicio e imperio de otro, viven en los monasterios, y desean que los gobierne un abad. Sin duda estos tales practican aquella sentencia del Señor que dice: "No vine a hacer mi voluntad, sino la de Aquel que me envió" (Jn 6,38).

Pero esta misma obediencia será entonces agradable a Dios y dulce a los hombres, si la orden se ejecuta sin vacilación, sin tardanza, sin tibieza, sin murmuración o sin negarse a obedecer, porque la obediencia que se rinde a los mayores, a Dios se rinde. Él efectivamente dijo: "El que a ustedes oye, a mí me oye" (Lc 10,16). Y los discípulos deben prestarla de buen grado porque "Dios ama al que da con alegría" (2 Co 9,7). Pero si el discípulo obedece con disgusto y murmura, no solamente con la boca sino también con el corazón, aunque cumpla lo mandado, su obediencia no será ya agradable a Dios que ve el corazón del que murmura. Obrando así no consigue gracia alguna, sino que incurre en la pena de los murmuradores, si no satisface y se enmienda.`,
    },
  },

  // DÍA 21
  {
    dia: 21,
    lecturaEspiritual: {
      titulo: "El silencio",
      fuente: "Regla de San Benito - Capítulo VI",
      contenido: `Hagamos lo que dice el Profeta: "Yo dije: guardaré mis caminos para no pecar con mi lengua; puse un freno a mi boca, enmudecí, me humillé y me abstuve de hablar aun cosas buenas" (Sal 38,2s). El Profeta nos muestra aquí que si a veces se deben omitir hasta conversaciones buenas por amor al silencio, con cuanta mayor razón se deben evitar las palabras malas por la pena del pecado.

Por tanto, dada la importancia del silencio, rara vez se dé permiso a los discípulos perfectos para hablar aun de cosas buenas, santas y edificantes, porque está escrito: "Si hablas mucho no evitarás el pecado" (Pr 10,19), y en otra parte: "La muerte y la vida están en poder de la lengua" (Pr 18,21). Pues hablar y enseñar le corresponde al maestro, pero callar y escuchar le toca al discípulo.

Por eso, cuando haya que pedir algo al superior, pídase con toda humildad y respetuosa sumisión. En cuanto a las bromas, las palabras ociosas y todo lo que haga reír, lo condenamos a una eterna clausura en todo lugar, y no permitimos que el discípulo abra su boca para tales expresiones.`,
    },
  },

  // DÍA 22
  {
    dia: 22,
    lecturaLiturgica: {
      titulo: "Programa de Cuaresma",
      contenido: `Hoy empieza propiamente la Santa Cuaresma. Tiene por objeto prepararnos para la conmemoración piadosa de la Pasión, Muerte y Resurrección de Nuestro Divino Redentor. La santa Iglesia nos prescribe para este tiempo: oración más frecuente, ayunos y abstinencias, recogimiento y limosnas.

1° Oración: La primera y mejor oración de Cuaresma debe ser la Santa Misa, para la que la Iglesia ha compuesto textos diferentes y hermosísimos cada día; el Viacrucis, que ha de procurarse hacer siquiera los miércoles y viernes; el salmo "Miserere" y los Salmos Penitenciales.

2° Ayunos y Abstinencias: En América son días de ayuno y abstinencia, el Miércoles de Ceniza y el Viernes Santo, y de abstinencia los viernes; estando obligados al ayuno desde los 21 años hasta los 60, y a la abstinencia desde los 7 años en adelante, salvo dispensa.

3° Recogimiento: La forma práctica de vivir recogidamente en Cuaresma es absteniéndose de bailes, cines, diversiones peligrosas, fiestas carnavalescas, etc.

4° Limosna: La mejor es la que se hace con los ahorros producidos con los ayunos y abstinencias y con la supresión de fiestas, diversiones vanas y fútiles regalos.`,
    },
    lecturaEspiritual: {
      titulo: "La humildad (Parte I)",
      fuente: "Regla de San Benito - Capítulo VII",
      contenido: `Clama, hermanos, la divina Escritura diciéndonos: "Todo el que se ensalza será humillado y el que se humilla será ensalzado" (Lc 14,11). Al decir esto nos muestra que toda exaltación es una forma de soberbia. El Profeta indica que se guarda de ella diciendo: "Señor, ni mi corazón fue ambicioso ni mis ojos altaneros; no anduve buscando grandezas ni maravillas superiores a mí." Pero ¿qué sucederá? "Si no he tenido sentimientos humildes, y si mi alma se ha envanecido, Tú tratarás mi alma como a un niño que es apartado del pecho de su madre" (Sal 130,1s).

Por eso, hermanos, si queremos alcanzar la cumbre de la más alta humildad, si queremos llegar rápidamente a aquella exaltación celestial a la que se sube por la humildad de la vida presente, tenemos que levantar con nuestros actos ascendentes la escala que se le apareció en sueños a Jacob, en la cual veía ángeles que subían y bajaban. Sin duda alguna, aquel bajar y subir no significa otra cosa sino que por la exaltación se baja y por la humildad se sube. Ahora bien, la escala misma así levantada es nuestra vida en el mundo, a la que el Señor levanta hasta el cielo cuando el corazón se humilla. Decimos, en efecto, que los dos lados de esta escala son nuestro cuerpo y nuestra alma, y en esos dos lados la vocación divina ha puesto los diversos escalones de humildad y de disciplina por los que debemos subir.

Así, pues, "el primer grado de humildad" consiste en que uno tenga siempre delante de los ojos el temor de Dios, y nunca lo olvide. Recuerde, pues, continuamente todo lo que Dios ha mandado, y medite sin cesar en su alma cómo el infierno abrasa, a causa de sus pecados, a aquellos que desprecian a Dios, y cómo la vida eterna está preparada para los que temen a Dios. Guárdese a toda hora de pecados y vicios, esto es, los de los pensamientos, de la lengua, de las manos, de los pies y de la voluntad propia, y apresúrese a cortar los deseos de la carne. Piense el hombre que Dios lo mira siempre desde el cielo, y que en todo lugar, la mirada de la divinidad ve sus obras, y que a toda hora los ángeles se las anuncian.

En cuanto a la voluntad propia, la Escritura nos prohíbe hacerla cuando dice: "Apártate de tus voluntades" (Si 18,30). Además pedimos a Dios en la Oración que se haga en nosotros su voluntad. Justamente, pues, se nos enseña a no hacer nuestra voluntad cuidándonos de lo que la Escritura nos advierte: "Hay caminos que parecen rectos a los hombres, pero su término se hunde en lo profundo del infierno" (Pr 16,25).

En cuanto a los deseos de la carne, creamos que Dios está siempre presente, pues el Profeta dice al Señor: "Ante ti están todos mis deseos" (Sal 37,10). Debemos, pues, cuidarnos del mal deseo, porque la muerte está apostada a la entrada del deleite. Por eso la Escritura nos da este precepto: "No vayas en pos de tus concupiscencias" (Si 18,30).`,
    },
  },

  // DÍA 23
  {
    dia: 23,
    lecturaEspiritual: {
      titulo: "La humildad (Parte II)",
      fuente: "Regla de San Benito - Capítulo VII",
      contenido: `"El segundo grado de humildad" consiste en que uno no ame su propia voluntad, ni se complazca en hacer sus gustos, sino que imite con hechos al Señor que dice: "No vine a hacer mi voluntad sino la de Aquel que me envió" (Jn 6,38). Dice también la Escritura: "La voluntad tiene su pena, y la necesidad engendra la corona."

"El tercer grado de humildad" consiste en que uno, por amor de Dios, se someta al superior en cualquier obediencia, imitando al Señor de quien dice el Apóstol: "Se hizo obediente hasta la muerte" (Flp 2,8).

"El cuarto grado de humildad" consiste en que, en la misma obediencia, así se impongan cosas duras y molestas o se reciba cualquier injuria, uno se abrace con la paciencia y calle en su interior, y soportándolo todo, no se canse ni desista, pues dice la Escritura: "El que perseverare hasta el fin se salvará" (Mt 10,22), y también: "Confórtese tu corazón y soporta al Señor" (Sal 26,10). Y para mostrar que el fiel debe sufrir por el Señor todas las cosas, aun las más adversas, dice en la persona de los que sufren: "Por ti soportamos la muerte cada día; nos consideran como ovejas de matadero" (Rm 8,36). Pero seguros de la recompensa divina que esperan, prosiguen gozosos diciendo: "Pero en todo esto triunfamos por Aquel que nos amó" (Rm 8,37). En las adversidades e injurias cumplen con paciencia el precepto del Señor, y a quien les golpea una mejilla, le ofrecen la otra; a quien les quita la túnica le dejan el manto, y si los obligan a andar una milla, van dos (cf. Mt 5,39ss); con el apóstol Pablo soportan a los falsos hermanos (cf. 2 Co 11,26), y bendicen a los que los maldicen (cf. 1 Co 4,12 y Rm 12,14).

"El quinto grado de humildad" consiste en que uno no le oculte a su abad todos los malos pensamientos que llegan a su corazón y las malas acciones cometidas en secreto, sino que los confiese humildemente. La Escritura nos exhorta a hacer esto diciendo: "Revela al Señor tu camino y espera en Él" (Sal 36,5).

"El sexto grado de humildad" consiste en que el monje esté contento con todo lo que es vil y despreciable, y que juzgándose obrero malo e indigno para todo lo que se le mande, se diga a sí mismo con el Profeta: "Fui reducido a la nada y nada supe; yo era como un jumento en tu presencia, pero siempre estaré contigo" (Sal 72,22s).

"El séptimo grado de humildad" consiste en que uno no sólo diga con la lengua que es el inferior y el más vil de todos, sino que también lo crea con el más profundo sentimiento del corazón, humillándose y diciendo con el Profeta: "Soy un gusano y no un hombre, oprobio de los hombres y desecho de la plebe" (Sal 21,7).

"El octavo grado de humildad" consiste en que el monje no haga nada sino lo que la Regla del monasterio o el ejemplo de los mayores le indica que debe hacer.

"El noveno grado de humildad" consiste en que el monje no permita a su lengua que hable. Guarde, pues, silencio y no hable hasta ser preguntado, porque la Escritura enseña que "en el mucho hablar no se evita el pecado" (Pr 10,19).

"El décimo grado de humildad" consiste en que uno no se ría fácil y prontamente, porque está escrito: "El necio en la risa levanta su voz" (Si 21,23).

"El undécimo grado de humildad" consiste en que el monje, cuando hable, lo haga con dulzura y sin reír, con humildad y con gravedad, diciendo pocas y juiciosas palabras, y sin levantar la voz, pues está escrito: "Se reconoce al sabio por sus pocas palabras."

"El duodécimo grado de humildad" consiste en que el monje no sólo tenga humildad en su corazón, sino que la demuestre siempre a cuantos lo vean aun con su propio cuerpo, es decir, que en la Obra de Dios, en el oratorio, en el monasterio, en el huerto, en el camino, en el campo, o en cualquier lugar, ya esté sentado o andando o parado, esté siempre con la cabeza inclinada y la mirada fija en tierra, y creyéndose en todo momento reo por sus pecados, se vea ya en el tremendo juicio. Y diga siempre en su corazón lo que decía aquel publicano del Evangelio con los ojos fijos en la tierra: "Señor, no soy digno yo, pecador, de levantar mis ojos al cielo" (cf. Lc 18,13).

Cuando el monje haya subido estos grados de humildad, llegará pronto a aquel amor de Dios que "siendo perfecto excluye todo temor" (1 Jn 4,18), en virtud del cual lo que antes observaba no sin temor, empezará a cumplirlo como naturalmente, como por costumbre, y no ya por temor del infierno sino por amor a Cristo, por el mismo hábito bueno y por el atractivo de las virtudes. Todo lo cual el Señor se dignará manifestar por el Espíritu Santo en su obrero, cuando ya esté limpio de vicios y pecados.`,
    },
  },

  // DÍA 24
  {
    dia: 24,
    comentario: `Hoy es día de fiesta, recordemos vivirlo con espíritu festivo y recordemos que podemos suspender una de las tres penitencias para el día de hoy. Dejamos la lectura de la epístola de este santo, que narra su elección como apóstol.¡San Matías, ora pro nobis! Epístola Lección de los Hechos de los Apóstoles (I, 15-26) En aquellos días Levantándose Pedro en medio de los hermanos (hallábanse reunidas unas 120 personas), dijo Hermanos es necesario que se cumpla la Escritura que el Espíritu Santo predijo por boca de David, acerca de Judas, que fue el caudillo de los que prendieron a Jesús el cual era de nuestro número, y suerte nuestro apostolado. Adquirió un campo con el precio de su traición; y ahorcándose reventó por medio y se esparcieron todas sus entrañas. Notorio es el caso a todos los habitantes de Jerusalén, de modo que aquel campo recibió en su lengua el nombre de "Hacéldama", esto es, "campo de la sangre". Porque escrito está en el libro de los Salmos "Desierta queda su morada, y no haya quien habite en ella"; y "reciba otro su episcopado". Conviene, pues, que estos varones que han estado en nuestra compañía todo el tiempo que el Señor Jesús vivió entre nosotros, empezando desde el bautismo de Juan hasta el día en que subió de entre nosotros al cielo, uno de éstos sea con nosotros testigo de su resurrección. Propusieron, pues, a dos a José, llamado Barsabás, por sobrenombre el Justo, y a Matías. Y orando dijeron "Tú, Señor, que conoces los corazones de todos, muéstranos cuál de estos dos has elegido para ocupar el lugar de este ministerio y apostolado, del cual prevaricó Judas, para irse a su lugar". Y echando suerte entre ellos, cayó la suerte en Matías, y fue contado entre los once Apóstoles.`,
    lecturaEspiritual: {
      titulo: "San Matías, Apóstol",
      fuente: "Regla de San Benito - Capítulo XIX",
      contenido: `EL MODO DE SALMODIAR 1 Creemos que Dios está presente en todas partes, y que "los ojos del Señor vigilan en todo lugar a buenos y malos" (Pr 15,3), 2 pero debemos creer esto sobre todo y sin la menor vacilación, cuando asistimos a la Obra de Dios. 3 Por tanto, acordémonos siempre de lo que dice el Profeta: "Sirvan al Señor con temor" (Sal 2,11). 4 Y otra vez: "Canten sabiamente" (Sal 46,8). 5 Y, "En presencia de los ángeles cantaré para ti" (Sal 137,1). 6 Consideremos, pues, cómo conviene estar en la presencia de la Divinidad y de sus ángeles, 7 y asistamos a la salmodia de tal modo que nuestra mente concuerde con nuestra voz.`,
    },
  },

  // DÍA 25
  {
    dia: 25,
    lecturaEspiritual: {
      titulo: "Miércoles de Témporas",
      fuente: "Regla de San Benito - Capítulo XX",
      contenido: `LA REVERENCIA EN LA ORACIÓN 1 Si cuando queremos sugerir algo a hombres poderosos, no osamos hacerlo sino con humildad y reverencia, 2 con cuánta mayor razón se ha de suplicar al Señor Dios de todas las cosas con toda humildad y pura devoción. 3 Y sepamos que seremos escuchados, no por hablar mucho, sino por la pureza de corazón y compunción de lágrimas. 4 Por eso la oración debe ser breve y pura, a no ser que se prolongue por un afecto inspirado por la gracia divina. 5 Pero en comunidad abréviese la oración en lo posible, y cuando el superior dé la señal, levántense todos juntos.`,
    },
  },

  // DÍA 26
  {
    dia: 26,
    lecturaEspiritual: {
      titulo: "San Alejandro",
      fuente: "Regla de San Benito - Capítulo XLIX",
      contenido: `LA OBSERVANCIA DE LA CUARESMA 1 Aunque la vida del monje debería tener en todo tiempo una observancia cuaresmal, 2 sin embargo, como son pocos los que tienen semejante fortaleza, los exhortamos a que en estos días de Cuaresma guarden su vida con suma pureza, 3 y a que borren también en estos días santos todas las negligencias de otros tiempos. 4 Lo cual haremos convenientemente, si nos apartamos de todo vicio y nos entregamos a la oración con lágrimas, a la lectura, a la compunción del corazón y a la abstinencia. 5 Por eso, añadamos en estos días algo a la tarea habitual de nuestro servicio, como oraciones particulares o abstinencia de comida y bebida, 6 de modo que cada uno, con gozo del Espíritu Santo, ofrezca voluntariamente a Dios algo sobre la medida establecida, 7 esto es, que prive a su cuerpo de algo de alimento, de bebida, de sueño, de conversación y de bromas, y espere la Pascua con la alegría del deseo espiritual. 8 Lo que cada uno ofrece propóngaselo a su abad, y hágalo con su oración y consentimiento, 9 porque lo que se hace sin permiso del padre espiritual, hay que considerarlo más como presunción y vanagloria que como algo meritorio. 10 Así, pues, todas las cosas hay que hacerlas con la aprobación del abad.`,
    },
  },

  // DÍA 27
  {
    dia: 27,
    lecturaEspiritual: {
      titulo: "Viernes de Témporas",
      fuente: "Regla de San Benito - Capítulo XXII",
      contenido: `COMO HAN DE DORMIR LOS MONJES 1 Duerma cada cual en su cama. 2 Reciban de su abad la ropa de cama adecuada a su género de vida. 3 Si es posible, duerman todos en un mismo local, pero si el número no lo permite, duerman de a diez o de a veinte, con ancianos que velen sobre ellos. 4 En este dormitorio arda constantemente una lámpara hasta el amanecer. 5 Duerman vestidos, y ceñidos con cintos o cuerdas. Cuando duerman, no tengan a su lado los cuchillos, no sea que se hieran durante el sueño. 6 Estén así los monjes siempre preparados, y cuando se dé la señal, levántense sin tardanza y apresúrense a anticiparse unos a otros para la Obra de Dios, aunque con toda gravedad y modestia. 7 Los hermanos más jóvenes no tengan las camas contiguas, sino intercaladas con las de los ancianos. 8 Cuando se levanten para la Obra de Dios, anímense discretamente unos a otros, para que los soñolientos no puedan excusarse.`,
    },
  },

  // DÍA 28
  {
    dia: 28,
    lecturaEspiritual: {
      titulo: "Sábado de Témporas",
      fuente: "Regla de San Benito - Capítulo XLI",
      contenido: `A QUÉ HORAS SE DEBE COMER 1 Desde la santa Pascua hasta Pentecostés, coman los monjes a la hora sexta, y cenen al anochecer. 2 Desde Pentecostés, durante el verano, si los monjes no trabajan en el campo o no les molesta un calor excesivo, ayunen los miércoles y viernes hasta nona, 3 y los demás días coman a sexta. 4 Pero si trabajan en el campo, o el calor del verano es excesivo, la comida manténgase a la hora sexta. Quede esto a juicio del abad. 5 Éste debe temperar y disponer todo de modo que las almas se salven, y que los hermanos hagan lo que hacen sin justa murmuración. 6 Desde el catorce de setiembre hasta el principio de Cuaresma, coman siempre los hermanos a la hora nona. 7 En Cuaresma, hasta Pascua, coman a la hora de vísperas. 8 Las mismas Vísperas celébrense de tal modo que los que comen, no necesiten luz de lámparas, sino que todo se concluya con la luz del día. 9 Y siempre calcúlese también la hora de la cena o la de la única comida de tal modo que todo se haga con luz natural.`,
    },
  },

  // DÍA 29
  {
    dia: 29,
    lecturaLiturgica: {
      titulo: "El Oficio Divino (III)",
      contenido: `ORGANIZACIÓN DEL OFICIO DIVINO

El Oficio Divino, tal como hoy y desde los primeros siglos de la Iglesia está organizado, abarca todo el año eclesiástico, y en éste todos los períodos o temporadas litúrgicas con todas las fiestas que se suceden, todas las semanas, todos los días y las principales horas de cada día. Desde el principio del año hasta su fin, desde la salida del sol hasta su ocaso, resuena sin cesar, gracias al Oficio Divino, la alabanza divina en alguna parte del mundo.

Uno de los primeros en organizar formalmente y casi de manera definitiva el Oficio Divino fue San Benito, en cuya Regla consta en detalle dicha organización. De este modo organizó San Benito el fondo de la piedad de sus hijos, al que, por lo mismo, no permitió que "antepusieran nada" a las ocupaciones del día.

Según este sistema, la oración u Oficio nocturno está dividido en cuatro partes, correspondientes a las cuatro "vigilias" en que los antiguos dividían la noche. A las tres primeras vigilias o divisiones nocturnas corresponde el Oficio de maitines con sus tres nocturnos, que debe rezarse regularmente en seguida de la media noche; y a la cuarta, el Oficio de laudes, que habría de empezar al despuntar el alba.

Por idéntico modo, la Iglesia repartió el Oficio diurno en cinco partes, de tres en tres horas, según la división grecorromana del día, nombrando Prima a las seis de la mañana; Tercia, a las nueve; Sexta, al mediodía; Nona, a las tres de la tarde; y Vísperas, a las seis. Más adelante, se añadió el Oficio de completas, con que se termina, al anochecer, el rezo diurno.

COMPLETAS

Este último oficio diurno es, lo mismo que el de Prima, de origen monástico y posterior a todos los demás. En Occidente fue, indudablemente, el Patriarca San Benito su primer autor. Instituyó para completar (de ahí su nombre, que también es de San Benito) ese sagrado septenario número de oficios diurnos.

Hay en las Completas un recuerdo de la lectura espiritual de los monjes (la Capítula), una confesión pública de las faltas del día (el Confíteor y sus anexos), una salmodia muy oportuna, un himno para ahuyentar los malos sueños y fantasmas nocturnos, el cántico de Simeón Nunc dimittis con una antífona alusiva a la Muerte y Resurrección de Jesucristo.

Sigue una Antífona a la Santísima Virgen (la "Salve", el "Ave Regina", el "Alma Redemptoris", o el "Regina coeli") con su oración correspondiente y empieza el sagrado silencio de la noche. Ya pueden dormir tranquilos los cristianos bajo la guardia de sus Ángeles tutelares.`,
    },
  },

  // DÍA 30
  {
    dia: 30,
    lecturaEspiritual: {
      titulo: "Santos Jovino y Basileo",
      fuente: "Regla de San Benito - Capítulo XLII",
      contenido: `QUE NADIE HABLE DESPUÉS DE COMPLETAS 1 Los monjes deben esforzarse en guardar silencio en todo momento, pero sobre todo en las horas de la noche. 2 Por eso, en todo tiempo, ya sea de ayuno o de refección, se procederá así: 3 Si se trata de tiempo en que no se ayuna, después de levantarse de la cena, siéntense todos juntos, y uno lea las "Colaciones" o las "Vidas de los Padres", o algo que edifique a los oyentes, 4 pero no el Heptateuco o los Reyes, porque no les será útil a los espíritus débiles oír esta parte de la Escritura en aquella hora. Léase, sin embargo, en otras horas. 5 Si es día de ayuno, díganse Vísperas, y tras un corto intervalo acudan enseguida a la lectura de las "Colaciones", como dijimos. 6 Lean cuatro o cinco páginas o lo que permita la hora, 7 para que durante ese tiempo de lectura puedan reunirse todos, porque quizás alguno estuvo ocupado en cumplir algún encargo, 8 y todos juntos recen Completas. Al salir de Completas, ninguno tiene ya permiso para decir nada a nadie. 9 Si se encuentra a alguno que quebranta esta regla de silencio, sométaselo a un severo castigo, 10 salvo si lo hace porque es necesario atender a los huéspedes, o si quizás el abad manda algo a alguien. 11 Pero aun esto mismo hágase con suma gravedad y discretísima moderación.`,
    },
  },

  // DÍA 31
  {
    dia: 31,
    lecturaEspiritual: {
      titulo: "San Emeterio y Celedonio",
      fuente: "Regla de San Benito - Capítulo XLIII",
      contenido: `LOS QUE LLEGAN TARDE A LA OBRA DE DIOS O A LA MESA 1 Cuando sea la hora del Oficio divino, ni bien oigan la señal, dejen todo lo que tengan entre manos y acudan con gran rapidez, 2 pero con gravedad, para no provocar disipación. 3 Nada, pues, se anteponga a la Obra de Dios. 4 Si alguno llega a las Vigilias después del Gloria del salmo 94 (que por esto queremos que se diga muy pausadamente y con lentitud), 5 no ocupe su puesto en el coro, sino el último de todos o el lugar separado que el abad determine para tales negligentes, para que sea visto por él y por todos. 6 Luego, al terminar la Obra de Dios, haga penitencia con pública satisfacción. 7 Juzgamos que éstos deben colocarse en el último lugar o aparte, para que, al ser vistos por todos, se corrijan al menos por su misma vergüenza. 8 Pero si se quedan fuera del oratorio, habrá alguno quizás que se vuelva a acostar y a dormir, o bien se siente afuera y se entretenga charlando y dé ocasión al maligno. 9 Que entren, pues, para que no lo pierdan todo y en adelante se enmienden. 10 En las Horas diurnas, quien no llega a la Obra de Dios hasta después del verso y del Gloria del primer salmo que se dice después del verso, quédese en el último lugar, según la disposición que arriba dijimos, 11 y no se atreva a unirse al coro de los que salmodian, hasta terminar esta satisfacción, a no ser que el abad lo perdone y se lo permita; 12 pero con tal que el culpable satisfaga por su falta. 13 Quien por su negligencia o culpa no llega a la mesa antes del verso, de modo que todos juntos digan el verso y oren y se sienten a la mesa a un tiempo, 14 sea corregido por esto hasta dos veces. 15 Si después no se enmienda, no se le permita participar de la mesa común, 16 sino que, privado de la compañía de todos, coma solo, sin tomar su porción de vino, hasta que dé satisfacción y se enmiende. 17 Reciba el mismo castigo el que no esté presente cuando se dice el verso después de la comida. 18 Nadie se atreva a tomar algo de comida o bebida ni antes ni después de la hora establecida. 19 Pero si el superior le ofrece algo a alguien, y éste lo rehúsa, cuando lo desee, no reciba lo que antes rehusó, ni nada, absolutamente nada, antes de la enmienda correspondiente.`,
    },
  },

  // DÍA 32
  {
    dia: 32,
    lecturaEspiritual: {
      titulo: "San Casimiro, Confesor",
      fuente: "Regla de San Benito - Capítulo XXXIII",
      contenido: `SI LOS MONJES DEBEN TENER ALGO PROPIO 1 En el monasterio se ha de cortar radicalmente este vicio. 2 Que nadie se permita dar o recibir cosa alguna sin mandato del abad, 3 ni tener en propiedad nada absolutamente, ni libro, ni tablillas, ni pluma, nada en absoluto, 4 como a quienes no les es lícito disponer de su cuerpo ni seguir sus propios deseos. 5 Todo lo necesario deben esperarlo del padre del monasterio, y no les está permitido tener nada que el abad no les haya dado o concedido. 6 Y que "todas las cosas sean comunes a todos" (Hch 4,32), como está escrito, de modo que nadie piense o diga que algo es suyo. 7 Si se sorprende a alguno que se complace en este pésimo vicio, amonésteselo una y otra vez, 8 y si no se enmienda, sométaselo a la corrección.`,
    },
  },

  // DÍA 33
  {
    dia: 33,
    lecturaEspiritual: {
      titulo: "San Adrián",
      fuente: "Regla de San Benito - Capítulo XXXIV",
      contenido: `SI TODOS DEBEN RECIBIR IGUALMENTE LO NECESARIO 1 Está escrito: "Repartíase a cada uno de acuerdo a lo que necesitaba" (Hch 4,35). 2 No decimos con esto que haya acepción de personas, no lo permita Dios, sino consideración de las flaquezas. 3 Por eso, el que necesita menos, dé gracias a Dios y no se contriste; 4 en cambio, el que necesita más, humíllese por su flaqueza y no se engría por la misericordia. 5 Así todos los miembros estarán en paz. 6 Ante todo, que el mal de la murmuración no se manifieste por ningún motivo en ninguna palabra o gesto. 7 Si alguno es sorprendido en esto, sométaselo a una sanción muy severa.`,
    },
  },

  // DÍA 34
  {
    dia: 34,
    lecturaEspiritual: {
      titulo: "Santas Perpetua y Felicidad, Mártires",
      fuente: "Regla de San Benito - Capítulo XXXI",
      contenido: `COMO DEBE SER EL MAYORDOMO DEL MONASTERIO 1 Elíjase como mayordomo del monasterio a uno de la comunidad que sea sabio, maduro de costumbres, sobrio y frugal, que no sea ni altivo, ni agitado, ni propenso a injuriar, ni tardo, ni pródigo, 2 sino temeroso de Dios, y que sea como un padre para toda la comunidad. 3 Tenga el cuidado de todo. 4 No haga nada sin orden del abad, 5 sino que cumpla todo lo que se le mande. 6 No contriste a los hermanos. 7 Si quizás algún hermano pide algo sin razón, no lo entristezca con su desprecio, sino niéguele razonablemente y con humildad lo que aquél pide indebidamente. 8 Mire por su alma, acordándose siempre de aquello del Apóstol: "Quien bien administra, se procura un buen puesto" (1 Tm 3,13). 9 Cuide con toda solicitud de los enfermos, niños, huéspedes y pobres, sabiendo que, sin duda, de todos éstos ha de dar cuenta en el día del juicio. 10 Mire todos los utensilios y bienes del monasterio como si fuesen vasos sagrados del altar. 11 No trate nada con negligencia. 12 No sea avaro ni pródigo, ni dilapide los bienes del monasterio. Obre en todo con mesura y según el mandato del abad. 13 Ante todo tenga humildad, y al que no tiene qué darle, déle una respuesta amable, 14 porque está escrito: "Más vale una palabra amable que la mejor dádiva" (Si 18,17). 15 Tenga bajo su cuidado todo lo que el abad le encargue, y no se entrometa en lo que aquél le prohíba. 16 Proporcione a los hermanos el sustento establecido sin ninguna arrogancia ni dilación, para que no se escandalicen, acordándose de lo que merece, según la palabra divina, aquel que "escandaliza a alguno de los pequeños" (Mt 18,6). 17 Si la comunidad es numerosa, dénsele ayudantes, con cuya asistencia cumpla él mismo con buen ánimo el oficio que se le ha confiado. 18 Dense las cosas que se han de dar, y pídanse las que se han de pedir, en las horas que corresponde, 19 para que nadie se perturbe ni aflija en la casa de Dios.`,
    },
  },

  // DÍA 35
  {
    dia: 35,
    comentario: `Hoy es día de fiesta para la comunidad de San Benito, ya que Santo Tomás “el más sabio de los santos y el más santo de los sabios” es uno de nuestros principales patronos. Por ello no dejemos de celebrar el día de hoy como corresponde. Pidiendo la intercesión de este gran santo y doctor de la Iglesia. Dejamos la Epístola correspondiente a la Misa del santo que hoy celebramos Epístola Lección del Libro de la Sabiduría (Sap. VII, 7-14) Deseé inteligencia, y me fue concedida; e invoqué al Espíritu de sabiduría, y vino a mí y la preferí a los reinos y tronos y en nada estimé las riquezas en comparación de ella ni comparé con ella las el oro, respecto de ella, es are-piedras preciosas; porque todo na menuda y la plata en su comparación, será despreciada como lodo. La amé más que a la salud y a la hermosura; y me propuse tenerla por luz, porque es inextinguible su resplandor. Todos los demás bienes me vinieron con ella, y por su mano recibí riquezas sin cuento; y me gozaba en todas ellas, porque me guiaba esta sabiduría; e ignoraba yo que fuese madre de todos estos bienes. Aprendíla sin ficción y la comunico sin envidia, y no encubro sus riquezas porque es un tesoro infinito para los hombres; y los que lo gozan se han hecho partícipes de la amistad de Dios, y agradables a Él, por haber enseñado la sabiduría.`,
    lecturaEspiritual: {
      titulo: "Santo Tomás de Aquino, Confesor y Doctor",
      fuente: "Regla de San Benito - Capítulo XXXV",
      contenido: `LOS SEMANEROS DE COCINA 1 Sírvanse los hermanos unos a otros, de tal modo que nadie se dispense del trabajo de la cocina, a no ser por enfermedad o por estar ocupado en un asunto de mucha utilidad, 2 porque de ahí se adquiere el premio de una caridad muy grande. 3 Dése ayuda a los débiles, para que no hagan este trabajo con tristeza; 4 y aun tengan todos ayudantes según el estado de la comunidad y la situación del lugar. 5 Si la comunidad es numerosa, el mayordomo sea dispensado de la cocina, como también los que, como ya dijimos, están ocupados en cosas de mayor utilidad. 6 Los demás sírvanse unos a otros con caridad. 7 El que termina el servicio semanal, haga limpieza el sábado. 8 Laven las toallas con las que los hermanos se secan las manos y los pies. 9 Tanto el que sale como el que entra, laven los pies a todos. 10 Devuelva al mayordomo los utensilios de su ministerio limpios y sanos, 11 y el mayordomo, a su vez, entréguelos al que entra, para saber lo que da y lo que recibe. 12 Los semaneros recibirán una hora antes de la comida, un poco de vino y de pan sobre la porción que les corresponde, 13 para que a la hora de la refección sirvan a sus hermanos sin murmuración y sin grave molestia, 14 pero en las solemnidades esperen hasta después de la misa. 15 Al terminar los Laudes del domingo, los semaneros que entran y los que salen, se pondrán de rodillas en el oratorio a los pies de todos, pidiendo que oren por ellos. 16 El que termina su semana, diga este verso: "Bendito seas, Señor Dios, porque me has ayudado y consolado" (cf. Dn 3,22; Sal 85,17). 17 Dicho esto tres veces, el que sale recibirá la bendición. Luego seguirá el que entra diciendo: "Oh Dios, ven en mi ayuda, apresúrate, Señor, a socorrerme" (Sal 69,2). 18 Todos repitan también esto tres veces, y luego de recibir la bendición, entre a servir.`,
    },
  },

  // DÍA 36
  {
    dia: 36,
    lecturaLiturgica: {
      titulo: "El Oficio Divino (IV)",
      contenido: `ELEMENTOS DEL OFICIO DIVINO

Tres son los elementos constitutivos del Oficio Divino: la alabanza, la lectura y la oración, los cuales originan ese coloquio jamás interrumpido entre la Esposa y el Esposo, entre Jesucristo y su Iglesia. "En la alabanza la Esposa habla al Esposo y se complace en decirle toda clase de elogios; en la lectura es el Esposo quien la habla y la regocija a ella con su voz; y finalmente, en la oración, la Esposa, que ha encontrado al Esposo, le confía sus anhelos, sus dolores y sus necesidades y sus sentimientos de gratitud."

La alabanza litúrgica comprende textos de la Sagrada Escritura y de la Tradición. De la Sagrada Escritura son los Salmos, que por su número y frecuente uso forman el fondo principal, y los cánticos, así del Nuevo como del Antiguo Testamento.

De la Tradición eclesiástica son los himnos, como el "Te Deum" y el "Gloria in excelsis", bastante parecidos a los salmos; y los demás verdaderos poemas, divididos en estrofas y compuestos conforme a las reglas de la métrica clásica o a las de la poesía rítmica.

La lectura la proporcionan los libros del Antiguo y Nuevo Testamento, los Santos Padres, las Actas de los Mártires y las Leyendas de los Santos. Es, pues, una lectura santa, abundante y muy sustanciosa. Por eso el Breviario es un compendio de toda la doctrina sagrada y una recopilación preciosa de acontecimientos y de datos históricos y religiosos.

Las oraciones usadas en el Oficio Divino son muy numerosas y de muy diferente hechura. Las más salientes y repetidas son las "Colectas", las cuales son comunes al Breviario y al Misal. Muchos de los salmos, himnos y cánticos son fervorosas plegarias, actos de contrición, gritos de júbilo. Quien quiera aprender a rezar, que maneje el Breviario, y encontrará fórmulas insuperables de oraciones.

LA ASISTENCIA DE LOS FIELES AL SERVICIO DIVINO

"En los tiempos antiguos, la asistencia de los fieles a las Horas del Oficio era mayor; pero fue disminuyendo gradualmente. En rigor de derecho, nada se manda a los seglares en esta materia; pero es sumamente de desear que también ellos tomen parte activa en el canto o en el rezo del Oficio de Vísperas, que en los días festivos se celebren en su propia parroquia."`,
    },
    lecturaEspiritual: {
      titulo: "Los Hermanos Enfermos",
      fuente: "Regla de San Benito - Capítulo XXXVI",
      contenido: `1 Ante todo y sobre todo se ha de atender a los hermanos enfermos, sirviéndolos como a Cristo en persona, 2 pues Él mismo dijo: "Enfermo estuve y me visitaron" (Mt 25,36), 3 y

"Lo que hicieron a uno de estos pequeños, a mí me lo hicieron" (Mt 25,40). 4 Pero consideren los mismos enfermos que se los sirve para honrar a Dios, y no molesten con pretensiones excesivas a sus hermanos que los sirven. 5 Sin embargo,

se los debe soportar pacientemente, porque tales enfermos hacen ganar una recompensa mayor. 6 Por tanto el abad tenga sumo cuidado de que no padezcan ninguna negligencia.

7 Para los hermanos enfermos haya un local aparte atendido por un servidor temeroso de Dios, diligente y solícito. 8 Ofrézcase a los enfermos, siempre que sea conveniente, el

uso de baños; pero a los sanos, especialmente a los jóvenes, permítaselos más difícilmente. 9 A los enfermos muy débiles les es permitido comer carne para reponerse,

pero cuando mejoren, dejen de hacerlo, como se acostumbra.

10 Preocúpese mucho el abad de que los mayordomos y los servidores no descuiden a los enfermos, porque él es el responsable de toda falta cometida por los discípulos.`,
    },
  },

  // DÍA 37
  {
    dia: 37,
    lecturaEspiritual: {
      titulo: "El Lector de la Semana",
      fuente: "Regla de San Benito - Capítulo XXXVIII",
      contenido: `1 En la mesa de los hermanos no debe faltar la lectura. Pero no debe leer allí el que de buenas a primeras toma el libro, sino que el lector de toda la semana ha de comenzar su oficio el domingo. 2 Después de la misa y comunión, el que entra en función pida a todos que oren por él, para que Dios aparte de él el espíritu de vanidad. 3 Y digan todos tres veces en el oratorio este verso que comenzará el lector: "Señor, ábreme los labios, y mi boca anunciará tus alabanzas" (Sal 50,17). 4 Reciba luego la bendición y comience su oficio de lector.

5 Guárdese sumo silencio, de modo que no se oiga en la mesa ni el susurro ni la voz de nadie, sino sólo la del lector.

6 Sírvanse los hermanos unos a otros, de modo que los que comen y beben, tengan lo necesario y no les haga falta pedir nada; 7 pero si necesitan algo, pídanlo llamando con un sonido más bien que con la voz. 8 Y nadie se atreva allí a preguntar algo sobre la lectura o sobre cualquier otra cosa, para que no haya ocasión de hablar, 9 a no ser que el superior quiera decir algo brevemente para edificación.

10 El hermano lector de la semana tomará un poco de vino con agua antes de comenzar a leer, a causa de la santa Comunión, y para que no le resulte penoso soportar el ayuno. 11 Luego tomará su alimento con los semaneros de cocina y los servidores.

12 No lean ni canten todos los hermanos por orden, sino los que edifiquen a los oyentes.`,
    },
  },

  // DÍA 38
  {
    dia: 38,
    lecturaEspiritual: {
      titulo: "El Trabajo Manual de Cada Día",
      fuente: "Regla de San Benito - Capítulo XLVIII",
      contenido: `1 La ociosidad es enemiga del alma. Por eso los hermanos deben ocuparse en ciertos tiempos en el trabajo manual, y a ciertas horas en la lectura espiritual. 2 Creemos, por lo tanto, que ambas ocupaciones pueden ordenarse de la manera siguiente:

3 Desde Pascua hasta el catorce de septiembre, desde la mañana, al salir de Prima, hasta aproximadamente la hora cuarta, trabajen en lo que sea necesario. 4 Desde la hora cuarta hasta aproximadamente la hora de sexta, dedíquense a la lectura. 5 Después de Sexta, cuando se hayan levantado de la mesa, descansen en sus camas con sumo silencio, y si tal vez alguno quiere leer, lea para sí, de modo que no moleste a nadie. 6 Nona dígase más temprano, mediada la hora octava, y luego vuelvan a trabajar en lo que haga falta hasta Vísperas.

7 Si las condiciones del lugar o la pobreza les obligan a recoger la cosecha por sí mismos, no se entristezcan, 8 porque entonces son verdaderamente monjes si viven del trabajo de sus manos, como nuestros Padres y los Apóstoles. 9 Sin embargo, dispóngase todo con mesura, por deferencia para con los débiles.

10 Desde el catorce de septiembre hasta el comienzo de Cuaresma, dedíquense a la lectura hasta el fin de la hora segunda. 11 Tercia dígase a la hora segunda, y luego trabajen en lo que se les mande hasta nona. 12 A la primera señal para la Hora de Nona, deje cada uno su trabajo, y estén listos para cuando toquen la segunda señal. 13 Después de comer, ocúpense todos en la lectura o en los salmos.

14 En los días de Cuaresma, desde la mañana hasta el fin de la hora tercera, ocúpense en sus lecturas, y luego trabajen en lo que se les mande, hasta la hora décima. 15 En estos días de Cuaresma, reciban todos un libro de la biblioteca que deberán leer ordenada e íntegramente. 16 Estos libros se han de distribuir al principio de Cuaresma.

17 Ante todo desígnense uno o dos ancianos, para que recorran el monasterio durante las horas en que los hermanos se dedican a la lectura. 18 Vean si acaso no hay algún hermano perezoso que se entrega al ocio y a la charla, que no atiende a la lectura, y que no sólo no saca ningún provecho para sí, sino que aún distrae a los demás. 19 Si se halla a alguien así, lo que ojalá no suceda, repréndanselo una y otra vez, 20 y si no se enmienda, aplíquesele el castigo de la Regla, de modo que los demás teman.

21 Y no se comunique un hermano con otro en las horas indebidas.

22 El domingo dedíquense también todos a la lectura, salvo los que están ocupados en los distintos oficios. 23 A aquel que sea tan negligente o perezoso que no quiera o no pueda meditar o leer, encárguesele un trabajo, para que no esté ocioso.

24 A los hermanos enfermos o débiles encárgueseles un trabajo o una labor tal que, ni estén ociosos, ni se sientan agobiados por el peso del trabajo o se vean obligados a abandonarlo. 25 El abad debe considerar la debilidad de éstos.`,
    },
  },

  // DÍA 39
  {
    dia: 39,
    lecturaEspiritual: {
      titulo: "Los Hermanos que Trabajan Lejos del Oratorio o Están de Viaje",
      fuente: "Regla de San Benito - Capítulo L",
      contenido: `1 Los hermanos que trabajan muy lejos y no pueden acudir al oratorio a la hora debida, 2 y el abad reconoce que es así, 3 hagan la Obra de Dios allí mismo donde trabajan, doblando las rodillas con temor de Dios.

4 Del mismo modo, los que han salido de viaje, no dejen pasar las horas establecidas, sino récenlas por su cuenta como puedan, y no descuiden pagar la prestación de su servicio.`,
    },
  },

  // DÍA 40
  {
    dia: 40,
    comentario: `La Providencia ha querido que hoy, en el día de San Gregorio Papa, autor de la vida de San Benito que leímos durante Septuagésima, inicie justamente la novena al Patriarca de Occidente. Hoy hasta el día 20 de marzo, rezaremos adicionalmente una novena a nuestro patrono pidiendo que nos ayude a vivir con verdadero espíritu benedictino este itinerario.`,
    lecturaEspiritual: {
      titulo: "El Oratorio del Monasterio",
      fuente: "Regla de San Benito - Capítulo LII",
      contenido: `1 Sea el oratorio lo que dice su nombre, y no se lo use para otra cosa, ni se guarde nada allí. 2 Cuando terminen la Obra de Dios, salgan todos en perfecto silencio, guardando reverencia a Dios, 3 de modo que si quizás un hermano quiere orar privadamente, no se lo impida la importunidad de otro.

4 Y si alguno, en otra ocasión, quiere orar por su cuenta con más recogimiento, que entre sencillamente y ore, pero no en alta voz, sino con lágrimas y con el corazón atento. 5 Por lo tanto, al que no ora así, no se le permita quedarse en el oratorio al concluir la Obra de Dios, no sea que, como se dijo, moleste a otro.`,
    },
  },

  // DÍA 41
  {
    dia: 41,
    lecturaEspiritual: {
      titulo: "Cómo Debe Ser el Abad (Parte 1)",
      fuente: "Regla de San Benito - Capítulo II",
      contenido: `1 Un abad digno de presidir un monasterio debe acordarse siempre de cómo se lo llama, y llenar con obras el nombre de superior. 2 Se cree, en efecto, que hace las veces de Cristo en el monasterio, puesto que se lo llama con ese nombre, 3 según lo que dice el Apóstol: "Recibieron el espíritu de adopción de hijos, por el cual clamamos: Abba, Padre" (Rm 8,15).

4 Por lo tanto, el abad no debe enseñar, establecer o mandar nada que se aparte del precepto del Señor, 5 sino que su mandato y su doctrina deben difundir el fermento de la justicia divina en las almas de los discípulos. 6 Recuerde siempre el abad que se le pedirá cuenta en el tremendo juicio de Dios de estas dos cosas: de su doctrina, y de la obediencia de sus discípulos. 7 Y sepa el abad que el pastor será el culpable del detrimento que el Padre de familias encuentre en sus ovejas. 8 Pero si usa toda su diligencia de pastor con el rebaño inquieto y desobediente, y emplea todos sus cuidados para corregir su mal comportamiento, 9 este pastor será absuelto en el juicio del Señor, y podrá decir con el Profeta: "No escondí tu justicia en mi corazón; manifesté tu verdad y tu salvación, pero ellos, desdeñándome, me despreciaron" (Sal 39,11 e Is 1,2). 10 Y entonces, por fin, la muerte misma sea el castigo de las ovejas desobedientes encomendadas a su cuidado.

11 Por tanto, cuando alguien recibe el nombre de abad, debe gobernar a sus discípulos con doble doctrina, 12 esto es, debe enseñar todo lo bueno y lo santo más con obras que con palabras. A los discípulos capaces proponga con palabras los mandatos del Señor, pero a los duros de corazón y a los más simples muestre con sus obras los preceptos divinos. 13 Y cuanto enseñe a sus discípulos que es malo, declare con su modo de obrar que no se debe hacer, no sea que predicando a los demás sea él hallado réprobo, 14 y que si peca, Dios le diga: "¿Por qué predicas tú mis preceptos y tomas en tu boca mi alianza? pues tú odias la disciplina y echaste mis palabras a tus espaldas" (Sal 49,16s), 15 y "Tú, que veías una paja en el ojo de tu hermano ¿no viste una viga en el tuyo?" (cf. Mt 7,3).

16 No haga distinción de personas en el monasterio. 17 No ame a uno más que a otro, sino al que hallare mejor por sus buenas obras o por la obediencia. 18 No anteponga el hombre libre al que viene a la religión de la condición servil, a no ser que exista otra causa razonable. 19 Si el abad cree justamente que ésta existe, hágalo así, cualquiera fuere su rango. De lo contrario, que cada uno ocupe su lugar, 20 porque tanto el siervo como el libre, todos somos uno en Cristo, y servimos bajo un único Señor en una misma milicia, porque no hay acepción de personas ante Dios. 21 Él nos prefiere solamente si nos ve mejores que otros en las buenas obras y en la humildad. 22 Sea, pues, igual su caridad para con todos, y tenga con todos una única actitud según los méritos de cada uno.`,
    },
  },

  // DÍA 42
  {
    dia: 42,
    lecturaEspiritual: {
      titulo: "Cómo Debe Ser el Abad (Parte 2)",
      fuente: "Regla de San Benito - Capítulo II",
      contenido: `23 El abad debe, pues, guardar siempre en su enseñanza, aquella norma del Apóstol que dice: "Reprende, exhorta, amonesta" (2 Tm 4,2), 24 es decir, que debe actuar según las circunstancias, ya sea con severidad o con dulzura, mostrando rigor de maestro o afecto de padre piadoso. 25 Debe, pues, reprender más duramente a los indisciplinados e inquietos, pero a los obedientes, mansos y pacientes, debe exhortarlos para que progresen; y le advertimos que amoneste y castigue a los negligentes y a los arrogantes.

26 No disimule los pecados de los transgresores, sino que, cuando empiecen a brotar, córtelos de raíz en cuanto pueda, acordándose de la desgracia de Helí, sacerdote de Silo.

27 A los mejores y más capaces corríjalos de palabra una o dos veces; pero a los malos, a los duros, 28 a los soberbios y a los desobedientes reprimalos en el comienzo del pecado con azotes y otro castigo corporal, sabiendo que está escrito: "Al necio no se lo corrige con palabras" (Pr 29,19), 29 y también: "Pega a tu hijo con la vara, y librarás su alma de la muerte" (Pr 23,14).

30 El abad debe acordarse siempre de lo que es, debe recordar el nombre que lleva, y saber que a quien más se le confía, más se le exige. 31 Y sepa qué difícil y ardua es la tarea que toma: regir almas y servir los temperamentos de muchos, pues con unos debe emplear halagos, reprensiones con otros, y con otros consejos. 32 Deberá conformarse y adaptarse a todos según su condición e inteligencia, de modo que no sólo no padezca detrimento la grey que le ha sido confiada, sino que él pueda alegrarse con el crecimiento del buen rebaño.

33 Ante todo no se preocupe de las cosas pasajeras, terrenas y caducas, de tal modo que descuide o no dé importancia a la salud de las almas encomendadas a él. 34 Piense siempre que recibió el gobierno de almas de las que ha de dar cuenta. 35 Y para que no se excuse en la escasez de recursos, acuérdese de que está escrito: "Busquen el reino de Dios y su justicia, y todas estas cosas se les darán por añadidura" (Mt 6,33), 36 y también: "Nada falta a los que le temen" (Sal 33,10).

37 Sepa que quien recibe almas para gobernar, debe prepararse para dar cuenta de ellas. 38 Tenga por seguro que, en el día del juicio, ha de dar cuenta al Señor de tantas almas como hermanos haya tenido confiados a su cuidado, además, por cierto, de su propia alma. 39 Y así, temiendo siempre la cuenta que va a rendir como pastor de las ovejas a él confiadas, al cuidar de las cuentas ajenas, se vuelve cuidadoso de la suya propia, 40 y al corregir a los otros con sus exhortaciones, él mismo se corrige de sus vicios.`,
    },
  },

  // DÍA 43
  {
    dia: 43,
    comentario: `Dentro de los domingos de la cuaresma, el domingo Laetare es un domingo especial como podemos aprender en la lectura litúrgica del día. Es un día excepcional de alegría dentro de la compunción y espíritu de sacrificio de la Cuaresma. El nombre Laetare viene del introito de este domingo que inicia: "Laetare, Jerusalem", alégrate Jerusalén.`,
    lecturaLiturgica: {
      titulo: "El Domingo Laetare",
      contenido: `El domingo "Laetáre" viene a alegrar y reconfortar a los ayunadores de Cuaresma. El Celebrante puede cambiar los ornamentos de color morado por los de color rosa. El órgano deja oír sus acordes. Las flores aparecen en el altar. Todo indica que es éste un domingo excepcional dentro de la Cuaresma, un día de asueto y de santa expansión. Pero a esto solamente tienen derecho los que han venido practicando fielmente los rigores cuaresmales. Para los demás debe ser un domingo de reproches y de censuras.

Tú, oh cristiano, que lees esto y que te preparas a asistir a la Misa: ¿cómo estás cumpliendo las observancias de Cuaresma? ¿Has ayunado, has hecho limosnas, has vivido con cierto recogimiento, te has retirado de las habituales diversiones mundanas? Si todavía no has empezado a hacerlo, suple la falta en esta segunda mitad de la Cuaresma.`,
    },
    lecturaEspiritual: {
      titulo: "Convocación de los Hermanos a Consejo",
      fuente: "Regla de San Benito - Capítulo III",
      contenido: `1 Siempre que en el monasterio haya que tratar asuntos de importancia, convoque el abad a toda la comunidad, y exponga él mismo de qué se ha de tratar. 2 Oiga el consejo de los hermanos, reflexione consigo mismo, y haga lo que juzgue más útil. 3 Hemos dicho que todos sean llamados a consejo porque muchas veces el Señor revela al más joven lo que es mejor.

4 Los hermanos den su consejo con toda sumisión y humildad, y no se atrevan a defender con insolencia su opinión. 5 La decisión dependa del parecer del abad, y todos obedecerán lo que él juzgue ser más oportuno. 6 Pero así como conviene que los discípulos obedezcan al maestro, así corresponde que éste disponga todo con probidad y justicia.

7 Todos sigan, pues, la Regla como maestra en todas las cosas, y nadie se aparte temerariamente de ella. 8 Nadie siga en el monasterio la voluntad de su propio corazón.

9 Ninguno se atreva a discutir con su abad atrevidamente, o fuera del monasterio. 10 Pero si alguno se atreve, quede sujeto a la disciplina regular. 11 Mas el mismo abad haga todo con temor de Dios y observando la Regla, sabiendo que ha de dar cuenta, sin duda alguna, de todos sus juicios a Dios, justísimo juez.

12 Pero si las cosas que han de tratarse para utilidad del monasterio son de menor importancia, tome consejo solamente de los ancianos, 13 según está escrito: "Hazlo todo con consejo, y después de hecho no te arrepentirás" (Pr 31,4 Vet lat; y Si 32,24).`,
    },
  },

  // DÍA 44
  {
    dia: 44,
    lecturaEspiritual: {
      titulo: "Con Qué Solicitud Debe el Abad Cuidar de los Excomulgados",
      fuente: "Regla de San Benito - Capítulo XXVII",
      contenido: `1 Cuide el abad con la mayor solicitud de los hermanos culpables, porque "no necesitan médico los sanos, sino los enfermos" (Mt 9,12). 2 Por eso debe usar todos los recursos, como un sabio médico. Envíe, pues, "sempectas", esto es, hermanos ancianos prudentes 3 que, como en secreto, consuelen al hermano vacilante, lo animen para que haga una humilde satisfacción, y lo consuelen "para que no sea abatido por una excesiva tristeza" (2 Co 2,7), 4 sino que, como dice el Apóstol, "experimente una mayor caridad" (2 Co 2,8); y todos oren por él.

5 Debe, pues, el abad extremar la solicitud y procurar con toda sagacidad e industria no perder ninguna de las ovejas confiadas a él. 6 Sepa, en efecto, que ha recibido el cuidado de almas enfermas, no el dominio tiránico sobre las sanas, 7 y tema lo que Dios dice en la amenaza del Profeta: "Tomaban lo que veían gordo y desechaban lo flaco" (Ez 34,3s).

8 Imite el ejemplo de piedad del buen Pastor, que dejó noventa y nueve ovejas en los montes, y se fue a buscar una que se había perdido. 9 Y tanto se compadeció de su flaqueza, que se dignó cargarla sobre sus sagrados hombros y volverla así al rebaño.`,
    },
  },

  // DÍA 45
  {
    dia: 45,
    lecturaEspiritual: {
      titulo: "El Orden de la Comunidad",
      fuente: "Regla de San Benito - Capítulo LXIII",
      contenido: `1 Guarde cada uno su puesto en el monasterio según su antigüedad en la vida monástica, o de acuerdo al mérito de su vida, o según lo disponga el abad. 2 Éste no debe perturbar la grey que le ha sido confiada, disponiendo algo injustamente, como si tuviera un poder arbitrario, 3 sino que debe pensar siempre que ha de rendir cuenta a Dios de todos sus juicios y acciones.

4 Por lo tanto, mantengan el orden que él haya dispuesto, o el que tengan los mismos hermanos, para acercarse a la paz y a la comunión, para entonar salmos, y para colocarse en el coro.

5 En ningún lugar, absolutamente, sea la edad la que determine el orden o dé preeminencia, 6 porque Samuel y Daniel siendo niños, juzgaron a los ancianos. 7 Así, excepto los que, como dijimos, el abad haya promovido por motivos superiores, o degradado por alguna causa, todos los demás guarden el orden de su ingreso a la vida monástica. 8 Por ejemplo, el que llegó al monasterio a la segunda hora del día, sepa que es menor que el que llegó a la primera, cualquiera sea su edad o dignidad. 9 Pero con los niños, mantengan todos la disciplina en todas las cosas.

10 Los jóvenes honren a sus mayores, y los mayores amen a los más jóvenes. 11 Al dirigirse a alguien, nadie llame a otro por su solo nombre, 12 sino que los mayores digan "hermanos" a los más jóvenes, y los jóvenes díganles "nonos" a sus mayores, que es expresión que denota reverencia paternal.

13 Al abad, puesto que se considera que hace las veces de Cristo, llámeselo "señor" y "abad", no para que se engría, sino por el honor y el amor de Cristo. 14 Por eso piense en esto, y muéstrese digno de tal honor.

15 Dondequiera que se encuentren los hermanos, el menor pida la bendición al mayor. 16 Al pasar un mayor, levántese el más joven y cédale el asiento, sin atreverse a sentarse junto a él, si su anciano no se lo manda, 17 cumpliendo así lo que está escrito: "Adelántense para honrarse unos a otros" (Rm 12,10).

18 Los niños y los adolescentes guarden sus puestos ordenadamente en el oratorio y en la mesa. 19 Fuera de allí y dondequiera que sea, estén sujetos a vigilancia y a disciplina, hasta que lleguen a la edad de la reflexión.`,
    },
  },

  // DÍA 46
  {
    dia: 46,
    lecturaEspiritual: {
      titulo: "La Ordenación del Abad",
      fuente: "Regla de San Benito - Capítulo LXIV",
      contenido: `1 Cuando hay que ordenar un abad, téngase siempre como norma que se ha de establecer a aquel a quien toda la comunidad, guiada por el temor de Dios, esté de acuerdo en elegir, o al que elija sólo una parte de la comunidad, aunque pequeña, pero con más sano criterio.

2 El que ha de ser ordenado, debe ser elegido por el mérito de su vida y la doctrina de su sabiduría, aun cuando fuera el último de la comunidad.

3 Pero si toda la comunidad, lo que Dios no permita, elige de común acuerdo a uno que sea tolerante con sus vicios, 4 y estos vicios de algún modo llegan al conocimiento del obispo a cuya diócesis pertenece el lugar en cuestión, o son conocidos por los abades o cristianos vecinos, 5 impidan éstos la conspiración de los malos, y establezcan en la casa de Dios un administrador digno, 6 sabiendo que han de ser bien recompensados, si obran con rectitud y por celo de Dios, y que, contrariamente, pecan si no lo hacen.

7 El que ha sido ordenado abad, considere siempre la carga que tomó sobre sí, y a quién ha de rendir cuenta de su administración. 8 Y sepa que debe más servir que mandar. 9 Debe ser docto en la ley divina, para que sepa y tenga de dónde sacar cosas nuevas y viejas; sea casto, sobrio, misericordioso, 10 y siempre prefiera la misericordia a la justicia, para que él lo alcance lo mismo. 11 Odie los vicios, pero ame a los hermanos. 12 Aun al corregir, obre con prudencia y no se exceda, no sea que por raspar demasiado la herrumbre se quiebre el recipiente; 13 tenga siempre presente su debilidad, y recuerde que no hay que quebrar la caña hendida (cf. Mt 12,20). 14 No decimos con esto que deje crecer los vicios, sino que debe cortarlos con prudencia y caridad, según vea que conviene a cada uno, como ya dijimos. 15 Y trate de ser más amado que temido.

16 No sea turbulento ni ansioso, no sea exagerado ni obstinado, no sea celoso ni demasiado suspicaz, porque nunca tendrá descanso. 17 Sea próvido y considerado en todas sus disposiciones, y ya se trate de cosas de Dios o de cosas del siglo, discierna y modere el trabajo que encomienda, 18 recordando la discreción del santo Jacob que decía: "Si fatigo mis rebaños haciéndolos andar demasiado, morirán todos en un día" (Gn 33,13). 19 Tomando, pues, este y otros testimonios de discreción, que es madre de virtudes, modere todo de modo que los fuertes deseen más y los débiles no rehúyan.

20 Sobre todo, guarde íntegramente la presente Regla, 21 para que, habiendo administrado bien, oiga del Señor lo que oyó aquel siervo bueno que distribuyó a su tiempo el trigo entre sus consiervos: 22 "En verdad les digo" - dice - "que lo establecerá sobre todos sus bienes" (Mt 24,47).`,
    },
  },

  // DÍA 47
  {
    dia: 47,
    lecturaEspiritual: {
      titulo: "Los Porteros del Monasterio",
      fuente: "Regla de San Benito - Capítulo LXVI",
      contenido: `1 A la puerta del monasterio póngase a un anciano discreto, que sepa recibir recados y transmitirlos, y cuya madurez no le permita estar ocioso.

2 Este portero debe tener su celda junto a la puerta, para que los que lleguen encuentren siempre presente quién les responda. 3 En cuanto alguien golpee o llame un pobre, responda enseguida "Deo gratias" o "Benedic", 4 y con toda la mansedumbre que inspira el temor de Dios, conteste prontamente con fervor de caridad.

5 Si este portero necesita un ayudante, désele un hermano más joven.

6 Si es posible, debe construirse el monasterio de modo que tenga todo lo necesario, esto es, agua, molino, huerta, y que las diversas artes se ejerzan dentro del monasterio, 7 para que los monjes no tengan necesidad de andar fuera, porque esto no conviene en modo alguno a sus almas.

8 Queremos que esta Regla se lea muchas veces en comunidad, para que ninguno de los hermanos alegue ignorancia.`,
    },
  },

  // DÍA 48
  {
    dia: 48,
    lecturaEspiritual: {
      titulo: "Cómo Han de Ser Corregidos los Niños en su Menor Edad",
      fuente: "Regla de San Benito - Capítulo XXX",
      contenido: `1 Cada uno debe ser tratado según su edad y capacidad. 2 Por eso, los niños y los adolescentes, o aquellos que son incapaces de comprender la gravedad de la pena de la excomunión, 3 siempre que cometan una falta, deberán ser sancionados con rigurosos ayunos o corregidos con ásperos azotes, para que sanen.`,
    },
  },

  // DÍA 49
  {
    dia: 49,
    comentario: `Hoy es un día de celebración especial, celebramos al patriarca que nos está guiando y acompañando en este itinerario que iniciamos en Septuagésima, Fuit vir vitae gratia Benedictus et nomine. No dejemos de asistir a Misa y encomendarnos a su intercesión por los frutos de este camino de preparación a la Pascua.`,
    lecturaLiturgica: {
      titulo: "Misa propia de San Benito",
      contenido: `San Benito, gran patriarca de los monjes de Occidente posee una Misa propia que incluye incluso una secuencia: "Laeta quies magni Ducis". Dejamos el link para quienes puedan escucharla y transcribimos el texto:

LATÍN

Læta quies* magni ducis,
Dona ferens novæ lucis,
Hódie recólitur.

Caris datur piæ menti,
Corde sonet in ardénti,
Quídquid foris prómitur.

Hunc per callem oriéntis
Admirémur ascéndentis
Patriárchæ spéciem.

Amplum semen magnæ prolis
Illum fecit instar solis
Ábrahæ persímilem.

Corvum cernis ministrántem,
Hinc Elíam latitántem
Specu nosce párvulo.

Elisǽus dignoscátur,
Cum secúris revocátur
De torréntis álveo.

Illum Joseph candor morum,
Illum Jacob futurórum
Mens efféci cónscia.

Ipse memor suæ gentis,
Nos perdúcat in manéntis.
Semper Christi gáudia.
Amen. (T.P. Allelúja.)

TRADUCCIÓN

Hoy se celebra
El reposo* feliz del gran Caudillo,
Que trae dones de una nueva luz.

La gracia es dada al alma piadosa:
Resuene en el corazón fervoroso
Cuanto se expresa exteriormente.

Del esplendoroso Patriarca
Admiremos el ascenso
Por la senda de Oriente.

La amplia estirpe de su gran simiente
Hácelo resplandecer cual sol
A semejanza de Abrahán.

Mira el cuervo que le sirve,
Reconociéndole en la angosta cueva
Donde se oculta como Elías.

A Eliseo se parece,
Cuando hace subir el hacha
Del cauce del río.

La mente le parangona
A José por sus santas maneras,
Y a Jacob por sus vaticinios.

Que él, que siempre se acordó de sus hijos,
Nos conduzca a la gloria
De Cristo que permanece para siempre.
Amén. (T.P. Aleluya).`,
    },
    lecturaEspiritual: {
      titulo: "La Profecía que de su Muerte Hizo a los Monjes",
      fuente: "Vida de San Benito - Capítulo XXXVII",
      contenido: `En el mismo año que había de salir de esta vida, anunció el día de su santísima muerte a algunos de los monjes que vivían con él y a otros que estaban lejos; a los que estaban presentes les recomendó que guardaran silencio de lo que habían oído y a los ausentes les indicó la señal que les daría cuando su alma saliera del cuerpo.

Seis días antes de su muerte mandó abrir su sepultura. Pronto fue atacado por la fiebre y comenzó a fatigarse a causa de su violento ardor. Como la enfermedad se agravaba cada día más, al sexto día se hizo llevar por sus discípulos al oratorio, donde confortado para la salida de este mundo con la recepción del cuerpo y la sangre del Señor y apoyando sus débiles miembros en las manos de sus discípulos, permaneció de pie con las manos levantadas al cielo y exhaló el último suspiro, entre palabras de oración.

En el mismo día, dos de sus monjes, uno que vivía en el mismo monasterio y otro que estaba lejos de él tuvieron una misma e idéntica visión. Vieron en efecto un camino adornado de tapices y resplandeciente de innumerables lámparas, que en dirección a Oriente iba desde su monasterio al cielo. En la parte superior del camino, un hombre de aspecto venerable y lleno de luz les preguntó si sabían qué camino era el que estaban viendo. Al contestarle ellos que lo ignoraban, les dijo: "Éste es el camino por el cual el amado del Señor, Benito, ha subido al cielo". Así, pues, los presentes vieron la muerte del santo varón y los ausentes la conocieron por la señal que les había dado.

Fue sepultado en el oratorio de San Juan Bautista, que él mismo había edificado sobre el destruido altar de Apolo. Y tanto aquí como en la cueva de Subiaco, donde antes había habitado, brilla hasta el día de hoy por sus milagros, cuando lo merece la fe de quienes los piden.`,
    },
  },

  // DÍA 50
  {
    dia: 50,
    comentario: `La semana que viene inicia la Semana Santa, y hoy iniciamos la semana de Pasión que la precede. Es momento de intensificar la preparación ya próxima a la semana más importante del año del cristiano. Desde hoy se velan las imágenes religiosas con mantos morados, anunciando la pasión que se avecina.`,
    lecturaLiturgica: {
      titulo: "Primer Domingo de Pasión",
      contenido: `La Cuaresma anda ya adelantada. Pronto asomará la "Pascua florida" y entraremos en los conmovedores misterios de la Semana Santa. Hoy mismo, Domingo de Pasión, aparecen los altares y las estatuas cubiertos de luto, anunciando el luto y el duelo de la Iglesia, y de todos sus buenos hijos, por la vecina Muerte del Salvador.

¿Has cumplido tú ya con Pascua, o te preparas de verdad a cumplir pronto con ese sagrado deber? ¿Has confesado y comulgado durante la Cuaresma, o te preparas a confesar y comulgar en esta su última quincena? ¿Cuántos años hace que no te has confesado y que no has comulgado por Pascua? ¿Por qué no lo has hecho? ¿Por qué estás resuelto a no hacerlo tampoco este año? ¿Tienes miedo a no ser perdonado? ¿Te parecen demasiado grandes y numerosos tus pecados?

Si piensas así, irrogas gravísima injuria al Salvador, que murió por ti y por ti derramó su sangre. A Dios no le asustan tus pecados, pues desea perdonártelos; en cambio, le ofende tu poca confianza en Él, que es misericordioso y perdonador hasta lo infinito. Confiésate, pues, y vuelca en el Corazón de Jesús tus miserias, que Él te las trocará por riquezas de gracia.`,
    },
    lecturaEspiritual: {
      titulo: "La Profecía que de su Muerte Hizo a los Monjes",
      fuente: "Vida de San Benito - Capítulo XXXVII",
      contenido: `En el mismo año que había de salir de esta vida, anunció el día de su santísima muerte a algunos de los monjes que vivían con él y a otros que estaban lejos; a los que estaban presentes les recomendó que guardaran silencio de lo que habían oído y a los ausentes les indicó la señal que les daría cuando su alma saliera del cuerpo.

Seis días antes de su muerte mandó abrir su sepultura. Pronto fue atacado por la fiebre y comenzó a fatigarse a causa de su violento ardor. Como la enfermedad se agravaba cada día más, al sexto día se hizo llevar por sus discípulos al oratorio, donde confortado para la salida de este mundo con la recepción del cuerpo y la sangre del Señor y apoyando sus débiles miembros en las manos de sus discípulos, permaneció de pie con las manos levantadas al cielo y exhaló el último suspiro, entre palabras de oración.

En el mismo día, dos de sus monjes, uno que vivía en el mismo monasterio y otro que estaba lejos de él tuvieron una misma e idéntica visión. Vieron en efecto un camino adornado de tapices y resplandeciente de innumerables lámparas, que en dirección a Oriente iba desde su monasterio al cielo. En la parte superior del camino, un hombre de aspecto venerable y lleno de luz les preguntó si sabían qué camino era el que estaban viendo. Al contestarle ellos que lo ignoraban, les dijo: "Éste es el camino por el cual el amado del Señor, Benito, ha subido al cielo". Así, pues, los presentes vieron la muerte del santo varón y los ausentes la conocieron por la señal que les había dado.

Fue sepultado en el oratorio de San Juan Bautista, que él mismo había edificado sobre el destruido altar de Apolo. Y tanto aquí como en la cueva de Subiaco, donde antes había habitado, brilla hasta el día de hoy por sus milagros, cuando lo merece la fe de quienes los piden.`,
    },
  },

  // DÍA 51
  {
    dia: 51,
    lecturaEspiritual: {
      titulo: "Si a un Hermano le Mandan Cosas Imposibles",
      fuente: "Regla de San Benito - Capítulo LXVIII",
      contenido: `1 Si sucede que a un hermano se le mandan cosas difíciles o imposibles, reciba éste el precepto del que manda con toda mansedumbre y obediencia. 2 Pero si ve que el peso de la carga excede absolutamente la medida de sus fuerzas, exponga a su superior las causas de su imposibilidad con paciencia y oportunamente, 3 y no con soberbia, resistencia o contradicción. 4 Pero si después de esta sugerencia, el superior mantiene su decisión, sepa el más joven que así conviene, 5 y confiando por la caridad en el auxilio de Dios, obedezca.`,
    },
  },

  // DÍA 52
  {
    dia: 52,
    lecturaEspiritual: {
      titulo: "Que se Obedezcan Unos a Otros",
      fuente: "Regla de San Benito - Capítulo LXXI",
      contenido: `1 El bien de la obediencia debe ser practicado por todos, no sólo respecto del abad, sino que los hermanos también deben obedecerse unos a otros, 2 sabiendo que por este camino de la obediencia irán a Dios. 3 Den prioridad a lo que mande el abad o las autoridades instituidas por él, a lo que no permitimos que se antepongan órdenes privadas, pero en todo lo demás, 4 los más jóvenes obedezcan a los mayores con toda caridad y solicitud. 5 Y si se halla algún rebelde, sea corregido. 6 Si algún hermano es corregido en algo por su abad o por algún superior, aunque fuere por un motivo mínimo, 7 o nota que el ánimo de alguno de ellos está un tanto irritado o resentido contra él, 8 al punto y sin demora arrójese a sus pies y permanezca postrado en tierra dando satisfacción, hasta que aquella inquietud se sosiegue con la bendición. 9 Pero si alguno menosprecia hacerlo, sométaselo a pena corporal, y si fuere contumaz, expúlsenlo del monasterio.`,
    },
  },

  // DÍA 53
  {
    dia: 53,
    lecturaEspiritual: {
      titulo: "El Buen Celo que Han de Tener los Monjes",
      fuente: "Regla de San Benito - Capítulo LXXII",
      contenido: `1 Así como hay un mal celo de amargura que separa de Dios y lleva al infierno, 2 hay también un celo bueno que separa de los vicios y conduce a Dios y a la vida eterna. 3 Practiquen, pues, los monjes este celo con la más ardiente caridad, 4 esto es, "adelántense para honrarse unos a otros" (Rm 12,10); 5 tolérense con suma paciencia sus debilidades, tanto corporales como morales; 6 obedézcanse unos a otros a porfía; 7 nadie busque lo que le parece útil para sí, sino más bien para otro; 8 practiquen la caridad fraterna castamente; 9 teman a Dios con amor; 10 amen a su abad con una caridad sincera y humilde; 11 y nada absolutamente antepongan a Cristo, 12 el cual nos lleve a todos juntamente a la vida eterna.`,
    },
  },

  // DÍA 54
  {
    dia: 54,
    lecturaEspiritual: {
      titulo: "La Recepción de los Huéspedes",
      fuente: "Regla de San Benito - Capítulo LIII",
      contenido: `1 Recíbanse a todos los huéspedes que llegan como a Cristo, pues Él mismo ha de decir: "Huésped fui y me recibieron" (Mt 25,35). 2 A todos dése el honor que corresponde, pero sobre todo a los hermanos en la fe y a los peregrinos. 3 Cuando se anuncie un huésped, el superior o los hermanos salgan a su encuentro con la más solícita caridad. 4 Oren primero juntos y dense luego la paz. 5 No den este beso de paz antes de la oración, sino después de ella, a causa de las ilusiones diabólicas. 6 Muestren la mayor humildad al saludar a todos los huéspedes que llegan o se van, 7 inclinando la cabeza o postrando todo el cuerpo en tierra, adorando en ellos a Cristo, que es a quien se recibe. 8 Lleven a orar a los huéspedes que reciben, y luego el superior, o quien éste mandare, siéntese con ellos. 9 Léanle al huésped la Ley divina para que se edifique, y trátenlo luego con toda cortesía. 10 En atención al huésped, el superior no ayunará (a no ser que sea un día de ayuno importante que no pueda quebrantarse), 11 pero los hermanos continúen ayunando como de costumbre. 12 El abad vierta el agua para lavar las manos de los huéspedes, 13 y tanto el abad como toda la comunidad laven los pies a los huéspedes. 14 Después de lavarlos, digan este verso: "Hemos recibido, Señor, tu misericordia en medio de tu templo" (Sal 47,10). 15 Al recibir a pobres y peregrinos se tendrá el máximo de cuidado y solicitud, porque en ellos se recibe especialmente a Cristo, pues cuando se recibe a ricos, el mismo temor que inspiran, induce a respetarlos. 16 Debe haber una cocina aparte para el abad y los huéspedes, para que éstos, que nunca faltan en el monasterio, no incomoden a los hermanos, si llegan a horas imprevistas. 17 Dos hermanos que cumplan bien su oficio, encárguense de esta cocina durante un año. 18 Si es necesario, se les proporcionará ayudantes para que sirvan sin murmuración; por el contrario, cuando estén menos ocupados, vayan a trabajar a donde se los mande. 19 Y no sólo con éstos, sino con todos los que trabajan en oficios del monasterio, téngase esta consideración 20 de concederles ayuda cuando lo necesiten, pero luego, cuando estén desocupados, obedezcan lo que les manden. 21 Un hermano, cuya alma esté poseída del temor de Dios, se encargará de la hospedería, 22 en la cual habrá un número suficiente de camas preparadas. Y la casa de Dios sea sabiamente administrada por varones sabios. 23 No trate con los huéspedes ni converse con ellos quien no estuviere encargado de hacerlo. 24 Pero si alguno los encuentra o los ve, salúdelos humildemente, como dijimos, pida la bendición y pase de largo, diciendo que no le es lícito hablar con un huésped.`,
    },
  },

  // DÍA 55
  {
    dia: 55,
    lecturaEspiritual: {
      titulo: "El Vestido y Calzado de los Monjes",
      fuente: "Regla de San Benito - Capítulo LV",
      contenido: `1 Dése a los hermanos la ropa que necesiten según el tipo de las regiones en que viven o el clima de ellas, 2 pues en las regiones frías se necesita más, y en las cálidas menos. 3 Esta apreciación le corresponde al abad. 4 Por nuestra parte, sin embargo, creemos que en lugares templados a cada monje le basta tener cogulla y túnica 5 (la cogulla velluda en invierno, y ligera y usada en verano), 6 un escapulario para el trabajo, y medias y zapatos para los pies. 7 No se quejen los monjes del color o de la tosquedad de estas prendas, sino acéptenlas tales cuales se puedan conseguir en la provincia donde vivan, o que puedan comprarse más baratas. 8 Preocúpese el abad de la medida de estos mismos vestidos, para que no les queden cortos a los que los usan, sino a su medida. 9 Cuando reciban vestidos nuevos, devuelvan siempre al mismo tiempo los viejos, que han de guardarse en la ropería para los pobres. 10 Pues al monje le bastan dos túnicas y dos cogullas, para poder cambiarse de noche y para lavarlas; 11 tener más que esto es superfluo y debe suprimirse. 12 Devuelvan también las medias y todo lo viejo, cuando reciban lo nuevo. 13 Los que salen de viaje, reciban ropa interior de la ropería, y al volver devuélvanla lavada. 14 Haya también cogullas y túnicas un poco mejores que las de diario; recíbanlas de la ropería los que salen de viaje, y devuélvanlas al regresar. 15 Como ropa de cama es suficiente una estera, una manta, un cobertor y una almohada. 16 El abad ha de revisar frecuentemente las camas, para evitar que se guarde allí algo en propiedad. 17 Y si se descubre que alguien tiene alguna cosa que el abad no le haya concedido, sométaselo a gravísimo castigo. 18 Para cortar de raíz este vicio de la propiedad, provea el abad todas las cosas que son necesarias, 19 esto es: cogulla, túnica, medias, zapatos, cinturón, cuchillo, pluma, aguja, pañuelo y tablillas para escribir, para eliminar así todo pretexto de necesidad. 20 Sin embargo, tenga siempre presente el abad aquella sentencia de los Hechos de los Apóstoles: "Se daba a cada uno lo que necesitaba" (Hch 4,35). 21 Así, pues, atienda el abad a las flaquezas de los necesitados y no a la mala voluntad de los envidiosos. 22 Y en todas sus decisiones piense en la retribución de Dios.`,
    },
  },

  // DÍA 56
  {
    dia: 56,
    comentario: `Hoy sábado de pasión terminamos el tiempo de cuaresma para dar inicio al tiempo de Semana Santa. Hoy concluimos así mismo la lectura de la Santa Regla del Patriarca San Benito. Con el deseo de seguir su escuela de servicio divino, y mantener el centro en la liturgia en esta Semana Santa, que es abundantemente rica en textos, ritos y cantos. Por ello durante la semana santa iremos compartiendo los textos que la liturgia nos va proponiendo para cada día.`,
    lecturaEspiritual: {
      titulo: "En esta Regla no Está Contenida Toda la Práctica de la Justicia",
      fuente: "Regla de San Benito - Capítulo LXXIII",
      contenido: `1 Hemos escrito esta Regla para que, observándola en los monasterios, manifestemos tener alguna honestidad de costumbres, o un principio de vida monástica. 2 Pero para el que corre hacia la perfección de la vida monástica, están las enseñanzas de los santos Padres, cuya observancia lleva al hombre a la cumbre de la perfección. 3 Porque ¿qué página o qué sentencia de autoridad divina del Antiguo o del Nuevo Testamento, no es rectísima norma de vida humana? 4 O ¿qué libro de los santos Padres católicos no nos apremia a que, por un camino recto, alcancemos a nuestro Creador? 5 Y también las Colaciones de los Padres, las Instituciones y sus Vidas, como también la Regla de nuestro Padre san Basilio, 6 ¿qué otra cosa son sino instrumento de virtudes para monjes de vida santa y obedientes? 7 Pero para nosotros, perezosos, licenciosos y negligentes, son motivo de vergüenza y confusión. 8 Quienquiera, pues, que te apresuras hacia la patria celestial, practica, con la ayuda de Cristo, esta mínima Regla de iniciación que hemos delineado, 9 y entonces, por fin, llegarás, con la protección de Dios, a las cumbres de doctrina y virtudes que arriba dijimos. Amén.`,
    },
  },

  // DÍA 57
  {
    dia: 57,
    comentario: `Los más grandes misterios de nuestra Redención, es decir la PASIÓN, la MUERTE y la RESURRECCIÓN de Nuestro Señor Jesucristo, fueron celebrados por la Santa Madre Iglesia desde la época apostólica, todos los años con singular recordación. Ante todo se rememoran los momentos más importantes de dichos misterios en un TRIDUO especial, llamado según San Agustín de Cristo crucificado, sepultado y resucitado; se agregó luego la solemne conmemoración de la Institución de la Santísima Eucaristía; y finalmente, en el domingo que precede inmediatamente la Pasión, se incluyó la celebración litúrgica de la entrada triunfal de Nuestro Señor, Rey y Mesías, en la Ciudad Santa de Jerusalén. Así surgió esa especial semana litúrgica, que, por la importancia de los misterios en ella conmemorados, recibió la denominación de "SEMANA SANTA", y fue enriquecida con ritos especialmente espléndidos y piadosos. Es, pues, ésta una semana de santas e íntimas emociones, muy apropiadas para afianzar nuestra fe y para la conversión de los pecadores. Las Misas y los Oficios de estos santos días nos pintan al vivo la perversidad y la ingratitud de los hombres para con Dios y la mansedumbre y el amor entrañable de Jesús con sus enemigos y para con la pobre humanidad. Por lo mismo, es una semana de consuelo y de luto, a la vez, pero de un luto confortador. Los ayunos y las abstinencias, los sermones especiales, los viacrucis solemnes, las visitas a los templos, los cantos graves de los Oficios, los textos sagrados, todo en estos días nos convida a la compunción del corazón. Una buena y reformadora Confesión, con una fervorosa Comunión, será el fruto inmediato más precioso de esta semana de salvación.`,
    lecturaLiturgica: {
      titulo: "Segundo Domingo de Pasión o Domingo de Ramos",
      contenido: `Los antiguos llamaban a este Domingo de Ramos "la Pascua florida", tanto porque en el hemisferio europeo coincide con los albores de la primavera, como porque con él alborea la primavera espiritual de la Resurrección de Cristo y porque debe efectuarse en las almas un reflorecimiento de vida sobrenatural. Ambos nombres: "Domingo de Ramos" y "Pascua florida", nos sugieren la misma idea de alegría y de triunfo en torno al mismo hecho evangélico de la entrada gloriosa de Jesús en Jerusalén, pocos días antes de su Pasión y de su Muerte. La Iglesia ha sabido grabar y perpetuar este acontecimiento en el pueblo cristiano dedicándole el primer día de la Semana Santa y dándole extraordinario relieve en la liturgia del día.`,
    },
    lecturaEspiritual: {
      titulo: "Pasión de Nuestro Señor Jesucristo Según San Mateo",
      fuente: "Mateo 26:36-75; 27:1-60",
      contenido: `En aquel tiempo: Jesús fue con sus discípulos a un huerto, llamado Getsemaní, y les dijo: «Sentaos aquí, mientras voy allá a orar». Y llevándose a Pedro y a los dos hijos de Zebedeo, empezó a sentir tristeza y angustia. Entonces les dijo: «Mi alma está triste hasta la muerte; quedaos aquí y velad conmigo». Y adelantándose un poco cayó rostro en tierra y oraba diciendo: «Padre mío, si es posible, que pase de mí este cáliz. Pero no se haga como yo quiero, sino como quieres tú». Y volvió a los discípulos y los encontró dormidos. Dijo a Pedro: «¿No habéis podido velar una hora conmigo? Velad y orad para no caer en la tentación, pues el espíritu está pronto, pero la carne es débil». De nuevo se apartó por segunda vez y oraba diciendo: «Padre mío, si este cáliz no puede pasar sin que yo lo beba, hágase tu voluntad». Y viniendo otra vez, los encontró dormidos, porque sus ojos se cerraban de sueño. Dejándolos de nuevo, por tercera vez oraba repitiendo las mismas palabras. Volvió a los discípulos, los encontró dormidos y les dijo: «Ya podéis dormir y descansar. Mirad, está cerca la hora y el Hijo del hombre va a ser entregado en manos de los pecadores. ¡Levantaos, vamos! Ya está cerca el que me entrega.» Todavía estaba hablando, cuando apareció Judas, uno de los Doce, acompañado de un tropel de gente, con espadas y palos, enviado por los sumos sacerdotes y los ancianos del pueblo. El traidor les había dado esta contraseña: «Al que yo bese, ese es: prendedlo». Después se acercó a Jesús y le dijo: «¡Salve, Maestro!». Y lo besó. Pero Jesús le contestó: «Amigo, ¿a qué vienes?». Entonces se acercaron a Jesús y le echaron mano y lo prendieron. Uno de los que estaban con él la agarró la espada, la desenvainó y de un tajo le cortó la oreja al criado del sumo sacerdote. Jesús le dijo: «Envaina la espada: que todos los que empuñan espada, a espada morirán. ¿Piensas tú que no puedo acudir a mi Padre? Él me mandaría enseguida más de doce legiones de ángeles. ¿Cómo se cumplirían entonces las Escrituras que dicen que esto tiene que pasar?». Entonces dijo Jesús a la gente: «¿Habéis salido a prenderme con espadas y palos como si fuera un bandido? A diario me sentaba en el templo a enseñar y, sin embargo, no me prendisteis. Pero todo esto ha sucedido para que se cumplieran las Escrituras de los profetas». En aquel momento todos los discípulos lo abandonaron y huyeron. Los que prendieron a Jesús lo condujeron a casa de Caifás, el sumo sacerdote, donde se habían reunido los escribas y los ancianos. Pedro lo seguía de lejos hasta el palacio del sumo sacerdote y, entrando dentro, se sentó con los criados para ver cómo terminaba aquello. Los sumos sacerdotes y el Sanedrín en pleno buscaban un falso testimonio contra Jesús para condenarlo a muerte y no lo encontraban, a pesar de los muchos falsos testigos que comparecían. Finalmente, comparecieron dos que declararon: «Este ha dicho: "Puedo destruir el templo de Dios y reconstruirlo en tres días"». El sumo sacerdote se puso en pie y le dijo: «¿No tienes nada que responder? ¿Qué son estos cargos que presentan contra ti?». Pero Jesús callaba. Y el sumo sacerdote le dijo: «Te conjuro por el Dios vivo a que nos digas si tú eres el Mesías, el Hijo de Dios». Jesús le respondió: «Tú lo has dicho. Más aún, yo os digo: desde ahora veréis al Hijo del hombre sentado a la derecha del Poder y que viene sobre las nubes del cielo». Entonces el sumo sacerdote rasgó sus vestiduras diciendo: «Ha blasfemado. ¿Qué necesidad tenemos ya de testigos? Acabáis de oír la blasfemia. ¿Qué decidís?». Y ellos contestaron: «Es reo de muerte». Entonces le escupieron a la cara y lo abofetearon; otros lo golpearon diciendo: «Haz de profeta, Mesías; dinos quién te ha pegado». Pedro estaba sentado fuera en el patio y se le acercó una criada y le dijo: «También tú estabas con Jesús el Galileo». Él lo negó delante de todos diciendo: «No sé qué quieres decir». Y al salir al portal lo vio otra y dijo a los que estaban allí: «Este estaba con Jesús el Nazareno». Otra vez negó él con juramento: «No conozco a ese hombre». Poco después se acercaron los que estaban allí y dijeron a Pedro: «Seguro; tú también eres de ellos, tu acento te delata». Entonces él se puso a echar maldiciones y a jurar diciendo: «No conozco a ese hombre». Y enseguida cantó un gallo. Pedro se acordó de aquellas palabras de Jesús: «Antes de que cante el gallo me negarás tres veces». Y, saliendo afuera, lloró amargamente. Al hacerse de día, todos los sumos sacerdotes y los ancianos del pueblo se reunieron para preparar la condena a muerte de Jesús. Y atándolo lo llevaron y lo entregaron a Pilato, el gobernador. Entonces Judas, el traidor, viendo que lo habían condenado, se arrepintió y devolvió las treinta monedas de plata a los sumos sacerdotes y ancianos diciendo: «He pecado entregando sangre inocente». Pero ellos dijeron: «¿A nosotros qué? ¡Allá tú!». Él, arrojando las monedas de plata en el templo, se marchó; y fue y se ahorcó. Los sacerdotes, recogiendo las monedas de plata, dijeron: «No es lícito echarlas en el arca de las ofrendas porque son precio de sangre». Y, después de discutirlo, compraron con ellas el Campo del Alfarero para cementerio de forasteros. Por eso aquel campo se llama todavía «Campo de Sangre». Así se cumplió lo dicho por medio del profeta Jeremías: «Y tomaron las treinta monedas de plata, el precio de uno que fue tasado, según la tasa de los hijos de Israel, y pagaron con ellas el Campo del Alfarero, como me lo había ordenado el Señor». Jesús fue llevado ante el gobernador, y el gobernador le preguntó: «¿Eres tú el rey de los judíos?». Jesús respondió: «Tú lo dices». Y mientras lo acusaban los sumos sacerdotes y los ancianos no contestaba nada. Entonces Pilato le preguntó: «¿No oyes cuántos cargos presentan contra ti?». Como no contestaba a ninguna pregunta, el gobernador estaba muy extrañado. Por la fiesta, el gobernador solía liberar un preso, el que la gente quisiera. Tenía entonces un preso famoso, llamado Barrabás. Cuando la gente acudió, dijo Pilato: «¿A quién queréis que os suelte, a Barrabás o a Jesús, a quien llaman el Mesías?». Pues sabía que se lo habían entregado por envidia. Y mientras estaba sentado en el tribunal, su mujer le mandó a decir: «No te metas con ese justo porque esta noche he sufrido mucho soñando con él». Pero los sumos sacerdotes y los ancianos convencieron a la gente para que pidieran la libertad de Barrabás y la muerte de Jesús. El gobernador preguntó: «¿A cuál de los dos queréis que os suelte?». Ellos dijeron: «A Barrabás». Pilato les preguntó: «¿Y qué hago con Jesús, llamado el Mesías?». Contestaron todos: «Sea crucificado». Pilato insistió: «Pues, ¿qué mal ha hecho?». Pero ellos gritaban más fuerte: «¡Sea crucificado!». Al ver Pilato que todo era inútil y que, al contrario, se estaba formando un tumulto, tomó agua y se lavó las manos ante la gente, diciendo: «Soy inocente de esta sangre. ¡Allá vosotros!». Todo el pueblo contestó: «¡Caiga su sangre sobre nosotros y sobre nuestros hijos!». Entonces les soltó a Barrabás; y a Jesús, después de azotarlo, lo entregó para que lo crucificaran. Entonces los soldados del gobernador se llevaron a Jesús al pretorio y reunieron alrededor de él a toda la cohorte: lo desnudaron y le pusieron un manto de color púrpura y trenzando una corona de espinas se la ciñeron a la cabeza y le pusieron una caña en la mano derecha. Y doblando ante él la rodilla, se burlaban de él diciendo: «¡Salve, rey de los judíos!». Luego le escupían, le quitaban la caña y le golpeaban con ella la cabeza. Y terminada la burla, le quitaron el manto, le pusieron su ropa y lo llevaron a crucificar. Al salir, encontraron a un hombre de Cirene, llamado Simón, y lo forzaron a llevar su cruz. Cuando llegaron al lugar llamado Gólgota que quiere decir lugar de «la Calavera», le dieron a beber vino mezclado con hiel; él lo probó, pero no quiso beberlo. Después de crucificarlo, se repartieron su ropa echándola a suertes y luego se sentaron a custodiarlo. Encima de la cabeza colocaron un letrero con la acusación: «Este es Jesús, el rey de los judíos». Crucificaron con él a dos bandidos, uno a la derecha y otro a la izquierda. Los que pasaban, lo injuriaban, y meneando la cabeza, decían: «Tú que destruyes el templo y lo reconstruyes en tres días, sálvate a ti mismo; si eres Hijo de Dios, baja de la cruz». Igualmente, los sumos sacerdotes con los escribas y los ancianos se burlaban también diciendo: «A otros ha salvado y él no se puede salvar. ¡Es el Rey de Israel!, que baje ahora de la cruz y le creeremos. Confió en Dios, que lo libre si es que lo ama, pues dijo: "Soy Hijo de Dios"». De la misma manera los bandidos que estaban crucificados con él lo insultaban. Desde la hora sexta hasta la hora nona vinieron tinieblas sobre toda la tierra. A la hora nona, Jesús gritó con voz potente: Elí, Elí, lemá sabaqtaní es decir: «Dios mío, Dios mío, ¿por qué me has abandonado?». Al oírlo algunos de los que estaban allí dijeron: «Está llamando a Elías». Enseguida uno de ellos fue corriendo, cogió una esponja empapada en vinagre y, sujetándola a una caña, le dio de beber. Los demás decían: «Déjalo, a ver si viene Elías a salvarlo». Jesús, gritando de nuevo con voz potente, exhaló el espíritu. Aquí todos se arrodillan y se hace una breve pausa. Entonces el velo del templo se rasgó de dos de arriba abajo; la tierra tembló, las rocas se resquebrajaron, las tumbas se abrieron y muchos cuerpos de santos que habían muerto resucitaron y, saliendo de las tumbas después que él resucitó, entraron en la ciudad santa y se aparecieron a muchos. El centurión y sus hombres, que custodiaban a Jesús, al ver el terremoto y lo que pasaba, dijeron aterrorizados: «Verdaderamente este era Hijo de Dios». Había allí muchas mujeres que miraban desde lejos, aquellas que habían seguido a Jesús desde Galilea para servirlo; entre ellas, María la Magdalena y María, la madre de Santiago y José, y la madre de los hijos de Zebedeo. Al anochecer llegó un hombre rico de Arimatea, llamado José, que era también discípulo de Jesús. Este acudió a Pilato a pedirle el cuerpo de Jesús. Y Pilato mandó que se lo entregaran. José, tomando el cuerpo de Jesús, lo envolvió en una sábana limpia, lo puso en su sepulcro nuevo que se había excavado en la roca, rodó una piedra grande a la entrada del sepulcro y se marchó.`,
    },
  },

  // DÍA 58
  {
    dia: 58,
    lecturaLiturgica: {
      titulo: "Lunes Santo",
      contenido: `Ayer por la tarde, Jesús salió de Jerusalén y se retiró a Betania, a pasar la noche con sus amigos Lázaro y hermanas. Vuelve hoy de madrugada a Jerusalén, y en el camino se encuentra con la higuera estéril y la maldice, y se seca. En la ciudad, sus enemigos lo asedian a preguntas insidiosas y quieren atropellarlo. Al atardecer regresa de nuevo al castillo de Betania.`,
    },
    lecturaEspiritual: {
      titulo: "Unción en Betania",
      fuente: "Juan 12:1-9",
      contenido: `Seis días antes de la Pascua volvió Jesús a Betania, donde vivía Lázaro a quien Jesús resucitó. Aquí le dispusieron una cena, Marta servía, y Lázaro era uno de los que estaban a la mesa con él. Y María tomó una libra de ungüento de nardo puro, y de gran precio, y lo derramó sobre los pies de Jesús, y los enjugó con sus cabellos; y se llenó la casa de la fragancia del perfume. Por lo cual Judas Iscariote, uno de sus discípulos, aquel que le había de entregar, dijo: ¿Por qué no se ha vendido este perfume por trescientos denarios, para limosna de los pobres? Esto dijo, no porque él pasase algún cuidado por los pobres, sino porque era ladrón y teniendo la bolsa, llevaba o defraudaba el dinero que se echaba en la bolsa. Pero Jesús respondió: Dejadla que lo emplee de antemano para honrar el día de mi sepultura. Pues en cuanto a los pobres, los tenéis siempre con vosotros; pero a mí no me tenéis siempre. Entretanto una gran multitud de judíos, luego que supieron que Jesús estaba allí, vinieron, no sólo por Jesús, sino también por ver a Lázaro, a quien había resucitado de entre los muertos.`,
    },
  },

  // DÍA 59
  {
    dia: 59,
    lecturaLiturgica: {
      titulo: "Martes Santo",
      contenido: `El Martes Santo visitó Jesús el templo de Jerusalén, acompañado por sus discípulos. Al ver, en el camino, seca la higuera que maldijo el día anterior, el divino Maestro inculcó a sus discípulos la necesidad de la fe y de las buenas obras. En el templo tiene disputas doctrinales con sus enemigos y les propone la parábola de los viñadores. Al atardecer, vuelve a retirarse a Betania. En la Misa se lee hoy la "Historia de la Pasión" según San Marcos.`,
    },
    lecturaEspiritual: {
      titulo: "Pasión Según San Marcos",
      fuente: "Marcos 14:32-72; 15, 1-46",
      contenido: `En aquel tiempo: Fueron a una finca, que llaman Getsemaní, y dijo a sus discípulos: Sentaos aquí mientras voy a orar. Se llevó a Pedro, a Santiago y a Juan, empezó a sentir terror y angustia, y les dijo: Me muero de tristeza: quedaos aquí velando. Y, adelantándose un poco, se postró en tierra pidiendo que, si era posible, se alejase de él aquella hora; y dijo: ¡Abba! Padre: tú lo puedes todo, aparta de mí ese cáliz. Pero no lo que yo quiero, sino lo que tú quieres. Volvió, y al encontrarlos dormidos, dijo a Pedro: Simón, ¿duermes?, ¿no has podido velar ni una hora? Velad y orad, para no caer en la tentación; el espíritu es decidido, pero la carne es débil. De nuevo se apartó y oraba repitiendo las mismas palabras. Volvió, y los encontró otra vez dormidos, porque tenían los ojos cargados. Y no sabían qué contestarle. Volvió y les dijo: Ya podéis dormir y descansar. ¡Basta! Ha llegado la hora; mirad que el Hijo del Hombre va a ser entregado en manos de los pecadores. ¡Levantaos, vamos! Ya está cerca el que me entrega. Todavía estaba hablando, cuando se presentó Judas, uno de los doce, y con él gente con espadas y palos, mandada por los sumos sacerdotes, los letrados y los ancianos. El traidor les había dado una contraseña, diciéndoles: Al que yo bese, es él: prendedlo y conducidlo bien sujeto. Y en cuanto llegó, se acercó y le dijo: ¡Maestro! Y lo besó. Ellos le echaron mano y lo prendieron. Pero uno de los presentes, desenvainando la espada, de un golpe le cortó la oreja al criado del sumo sacerdote. Jesús tomó la palabra y les dijo: ¿Habéis salido a prenderme con espadas y palos, como a caza de un bandido? A diario os estaba enseñando en el templo, y no me detuvisteis. Pero, que se cumplan las Escrituras. Y todos lo abandonaron y huyeron. Lo iba siguiendo un muchacho envuelto sólo en una sábana; y le echaron mano; pero él, soltando la sábana, se les escapó desnudo. Condujeron a Jesús a casa del sumo sacerdote, y se reunieron todos los sumos sacerdotes y los letrados y los ancianos. Pedro lo fue siguiendo de lejos, hasta el interior del patio del sumo sacerdote; y se sentó con los criados a la lumbre para calentarse. Los sumos sacerdotes y el sanedrín en pleno buscaban un testimonio contra Jesús, para condenarlo a muerte; y no lo encontraban. Pues, aunque muchos daban falso testimonio contra él, los testimonios no concordaban. Y algunos, poniéndose de pie, daban testimonio contra él diciendo: Nosotros le hemos oído decir: «Yo destruiré este templo, edificado por hombres, y en tres días construiré otro no edificado por hombres.» Pero ni en esto concordaban los testimonios. El sumo sacerdote se puso en pie en medio e interrogó a Jesús: ¿No tienes nada que responder? ¿Qué son estos cargos que levantan contra ti? Pero él callaba, sin dar respuesta. El sumo sacerdote lo interrogó de nuevo preguntándole: ¿Eres tú el Mesías, el Hijo de Dios bendito? Jesús contestó: Si lo soy. Y veréis que el Hijo del Hombre está sentado a la derecha del Todopoderoso y que viene entre las nubes del cielo. El sumo sacerdote se rasgó las vestiduras diciendo: ¿Qué falta hacen más testigos? Habéis oído la blasfemia. ¿Qué decís? Y todos lo declararon reo de muerte. Algunos se pusieron a escupirlo, y tapándole la cara, lo abofeteaban y le decían: Haz de profeta. Y los criados le daban bofetadas. Mientras Pedro estaba abajo en el patio, llegó una criada del sumo sacerdote y, al ver a Pedro calentándose, lo miró fijamente y dijo: También tu andabas con Jesús el Nazareno. Él lo negó diciendo: Ni sé ni entiendo lo que quieres decir. Salió fuera al zaguán, y un gallo cantó. La criada, al verlo, volvió a decir a los presentes: Este es uno de ellos. Y él lo volvió a negar. Al poco rato también los presentes dijeron a Pedro: Seguro que eres uno de ellos, pues eres galileo. Pero él se puso a echar maldiciones y a jurar: No conozco a ese hombre que decís. Y en seguida, por segunda vez, cantó el gallo. Pedro se acordó de las palabras que le había dicho Jesús: «Antes de que cante el gallo dos veces, me habrás negado tres», y rompió a llorar.] Apenas se hizo de día, los sumos sacerdotes con los ancianos, los letrados y el sanedrín en pleno, prepararon la sentencia; y, atando a Jesús, lo llevaron y lo entregaron a Pilato. Pilato le preguntó: ¿Eres tú el rey de los judíos? El respondió: Tú lo dices. Y los sumos sacerdotes lo acusaban de muchas cosas. Pilato le preguntó de nuevo: ¿No contestas nada? Mira de cuántas cosas te acusan. Jesús no contestó más; de modo que Pilato estaba muy extrañado. Por la fiesta solía soltarse un preso, el que le pidieran. Estaba en la cárcel un tal Barrabás, con los revoltosos que habían cometido un homicidio en la revuelta. La gente subió y empezó a pedir el indulto de costumbre. Pilato les contestó: ¿Queréis que os suelte al rey de los judíos? Pues sabía que los sumos sacerdotes se lo habían entregado por envidia. Pero los sumos sacerdotes soliviantaron a la gente para que pidieran la libertad de Barrabás. Pilato tomó de nuevo la palabra y les preguntó: ¿Qué hago con el que llamáis rey de los judíos? Ellos gritaron de nuevo: Crucifícalo. Pilato les dijo: Pues ¿qué mal ha hecho? Ellos gritaron más fuerte: Crucifícalo. Y Pilato, queriendo dar gusto a la gente, les soltó a Barrabás; y a Jesús, después de azotarlo, lo entregó para que lo crucificaran. Los soldados se lo llevaron al interior del palacio al pretorio y reunieron a toda la compañía. Lo vistieron de púrpura, le pusieron una corona de espinas, que habían trenzado, y comenzaron a hacerle el saludo: ¡Salve, rey de los judíos! Le golpearon la cabeza con una caña, le escupieron; y, doblando las rodillas, se postraban ante él. Terminada la burla, le quitaron la púrpura y le pusieron su ropa. Y lo sacaron para crucificarlo. Y a uno que pasaba, de vuelta del campo, a Simón de Cirene, el padre de Alejandro y de Rufo, lo forzaron a llevar la cruz. Y llevaron a Jesús al Gólgota que quiere decir lugar de «La Calavera», y le ofrecieron vino con mirra; pero él no lo aceptó. Lo crucificaron y se repartieron sus ropas, echándolas a suerte, para ver lo que se llevaba cada uno. Era media mañana cuando lo crucificaron. En el letrero de la acusación estaba escrito: EL REY DE LOS JUDÍOS. Crucificaron con él a dos bandidos, uno a su derecha y otro a su izquierda. Así se cumplió la Escritura que dice: «Lo consideraron como un malhechor.» Los que pasaban lo injuriaban, meneando la cabeza y diciendo: ¡Anda!, tú que destruías el templo y lo reconstruías en tres días, sálvate a ti mismo bajando de la cruz. Los sumos sacerdotes se burlaban también de él diciendo: A otros ha salvado y a sí mismo no se puede salvar. Que el Mesías, el rey de Israel, baje ahora de la cruz, para que lo veamos y creamos. También los que estaban crucificados con él lo insultaban. Al llegar el mediodía toda la región quedó en tinieblas hasta la media tarde. Y a la media tarde, Jesús clamó con voz potente: Eloí, Eloí, lamá sabaktaní. Que significa: Dios mío, Dios mío, ¿por qué me has abandonado? Algunos de los presentes, al oírlo, decían: Mira, está llamando a Elías. Y uno echó a correr y, empapando una esponja en vinagre, la sujetó a una caña, y le daba de beber diciendo: Dejad, a ver si viene Elías a bajarlo. Y Jesús, dando un fuerte grito expiró. Genuflexión. El velo del templo se rasgó en dos, de arriba abajo. El centurión, que estaba enfrente, al ver cómo había expirado, dijo: Realmente este hombre era Hijo de Dios. Había también unas mujeres que miraban desde lejos; entre ellas María Magdalena, María la madre de Santiago el Menor y de José y Salomé, que cuando él estaba en Galilea, lo seguían para atenderlo; y otras muchas que habían subido con él a Jerusalén. Al anochecer, como era el día de la Preparación, víspera del sábado, vino José de Arimatea, noble magistrado, que también aguardaba el Reino de Dios; se presentó decidido ante Pilato y le pidió el cuerpo de Jesús. Pilato se extrañó de que hubiera muerto ya; y, llamando al centurión, le preguntó si hacía mucho tiempo que había muerto. Informado por el centurión, concedió el cadáver a José. Este compró una sábana y, bajando a Jesús, lo envolvió en la sábana y lo puso en un sepulcro, excavado en una roca, y rodó una piedra a la entrada del sepulcro.`,
    },
  },

  // DÍA 60
  {
    dia: 60,
    lecturaLiturgica: {
      titulo: "Miércoles Santo",
      contenido: `El Miércoles Santo fue el día malhadado de la traición de Judas. Por eso quedó en la Iglesia el miércoles como día de dolor y de penitencia, como muy bien se ve en las Semanas de los Cuatro Témporas del año. Judas, avaro y cruel, por 30 monedas vendió a su Maestro, ahorcándose él después, presa de desesperación, no pudiendo ya evitar lo que tan malvadamente había preparado. ¡Es la historia de siempre! Los dineros mal adquiridos, vendiendo honras, despojando a la Iglesia y a las Ordenes Religiosas, negociando con la infamia y los vicios, no lucen. El demonio es el único que saca partido de eso, para perdición de sus poseedores.`,
    },
    lecturaEspiritual: {
      titulo: "Pasión Según San Lucas",
      fuente: "Lucas 22:39-71; 23:1-53",
      contenido: `Y salió Jesús, como de costumbre, al monte de los Olivos. Y lo siguieron los discípulos. Al llegar al sitio, les dijo: «Orad, para no caer en la tentación.» Él se arrancó de ellos, alejándose como a un tiro de piedra y, arrodillado, oraba, diciendo: «Padre, si quieres, aparta de mí ese cáliz; pero que no se haga mi voluntad, sino la tuya.» Y se le apareció un ángel del cielo, que lo animaba. En medio de su angustia, oraba con más insistencia. Y le bajaba hasta el suelo un sudor como de gotas de sangre. Y, levantándose de la oración, fue hacia sus discípulos, los encontró dormidos por la pena, y les dijo: «¿Por qué dormís? Levantaos y orad, para no caer en la tentación.» Judas, ¿con un beso entregas al Hijo del hombre? Todavía estaba hablando, cuando apareció gente; y lo guiaba el llamado Judas, uno de los Doce. Y se acercó a besar a Jesús. Jesús le dijo: «Judas, ¿con un beso entregas al Hijo del hombre?» Al darse cuenta los que estaban con él de lo que iba a pasar, dijeron: «Señor, ¿herimos con la espada?» Y uno de ellos hirió al criado del sumo sacerdote y le cortó la oreja derecha. Jesús intervino, diciendo: «Dejadlo, basta». Y, tocándole la oreja, lo curó. Jesús dijo a los sumos sacerdotes y a los oficiales del templo, y a los ancianos que habían venido contra él: «¿Habéis salido con espadas y palos, como a caza de un bandido? A diario estaba en el templo con vosotros, y no me echasteis mano. Pero ésta es vuestra hora: la del poder de las tinieblas.» Pedro, saliendo afuera, lloró amargamente. Ellos lo prendieron, se lo llevaron y lo hicieron entrar en casa del sumo sacerdote. Pedro lo seguía desde lejos. Ellos encendieron fuego en medio del patio, se sentaron alrededor, y Pedro se sentó entre ellos. Al verlo una criada sentado junto a la lumbre, se le quedó mirando y dijo: «También éste estaba con él.» Pero él lo negó, diciendo: «No lo conozco, mujer.» Poco después lo vio otro y le dijo: «Tú también eres uno de ellos.» Pedro replicó: «Hombre, no lo soy.» Pasada cosa de una hora, otro insistía: «Sin duda, también éste estaba con él, porque es galileo.» Pedro contestó: «Hombre, no sé de qué me hablas.» Y, estaba todavía hablando, cuando cantó un gallo. El Señor, volviéndose, le echó una mirada a Pedro, y Pedro se acordó de la palabra que el Señor le había dicho: «Antes de que cante hoy el gallo, me negarás tres veces.» Y, saliendo afuera, lloró amargamente. Haz de profeta; ¿quién te ha pegado? Y los hombres que sujetaban a Jesús se burlaban de él, dándole golpes. Y, tapándole la cara, le preguntaban: «Haz de profeta; ¿quién te ha pegado?» Y proferían contra él otros muchos insultos. Lo hicieron comparecer ante su Sanedrín. Cuando se hizo de día, se reunió el senado del pueblo, o sea, sumos sacerdotes y escribas, y, haciéndole comparecer ante su Sanedrín, le dijeron: «Si tú eres el Mesías, dínoslo.» Él les contestó: «Si os lo digo, no lo vais a creer; y si os pregunto, no me vais a responder. Desde ahora, el Hijo del hombre estará sentado a la derecha de Dios todopoderoso.» Dijeron todos: «Entonces, ¿tú eres el Hijo de Dios?» Él les contestó: «Vosotros lo decís, yo lo soy.» Ellos dijeron: «¿Qué necesidad tenemos ya de testimonios? Nosotros mismos lo hemos oído de su boca.» Se levantó toda la asamblea, y llevaron a Jesús a presencia de Pilato. Y se pusieron a acusarlo, diciendo: «Hemos comprobado que éste anda amotinando a nuestra nación, y oponiéndose a que se paguen tributos al César, y diciendo que él es el Mesías rey.» Pilato preguntó a Jesús: «¿Eres tú el rey de los judíos?» Él le contestó: «Tú lo dices.» Pilato dijo a los sumos sacerdotes y a la gente: «No encuentro ninguna culpa en este hombre.» Ellos insistían con más fuerza, diciendo: «Solivianta al pueblo enseñando por toda Judea, desde Galilea hasta aquí.» Pilato, al oírlo, preguntó si era galileo; y, al enterarse que era de la jurisdicción de Herodes, se lo remitió. Herodes estaba precisamente en Jerusalén por aquellos días. Herodes, con su escolta, lo trató con desprecio. Herodes, al ver a Jesús, se puso muy contento; pues hacía bastante tiempo que quería verlo, porque oía hablar de él y esperaba verle hacer algún milagro. Le hizo un interrogatorio bastante largo; pero él no le contestó ni palabra. Estaban allí los sumos sacerdotes y los escribas acusándolo con ahínco. Herodes, con su escolta, lo trató con desprecio y se burló de él; y, poniéndole una vestidura blanca, se lo remitió a Pilato. Aquel mismo día se hicieron amigos Herodes y Pilato, porque antes se llevaban muy mal. Pilato entregó a Jesús a su arbitrio. Pilato, convocando a los sumos sacerdotes, a las autoridades y al pueblo, les dijo: «Me habéis traído a este hombre, alegando que alborota al pueblo; y resulta que yo lo he interrogado delante de vosotros, y no he encontrado en este hombre ninguna de las culpas que le imputáis; ni Herodes tampoco, porque nos lo ha remitido: ya veis que nada digno de muerte se le ha probado. Así que le daré un escarmiento y lo soltaré.» Ellos vociferaban en masa, diciendo: «¡Fuera ése! ¡Suéltanos a Barrabás!» A éste lo habían metido en la cárcel por una revuelta acaecida en la ciudad y un homicidio. Pilato volvió a dirigirles la palabra con intención de soltar a Jesús. Pero ellos seguían gritando: «¡Crucifícalo, crucifícalo!» Él les dijo por tercera vez: «Pues, ¿qué mal ha hecho éste? No he encontrado en él ningún delito que merezca la muerte. Así es que le daré un escarmiento y lo soltaré.» Ellos se le echaban encima, pidiendo a gritos que lo crucificara; e iba creciendo el griterío. Pilato decidió que se cumpliera su petición: soltó al que le pedían al que había metido en la cárcel por revuelta y homicidio, y a Jesús se lo entregó a su arbitrio. Hijas de Jerusalén, no lloréis por mí. Mientras lo conducían, echaron mano de un cierto Simón de Cirene, que volvía del campo, y le cargaron la cruz, para que la llevase detrás de Jesús. Lo seguía un gran gentío del pueblo, y de mujeres que se daban golpes y lanzaban lamentos por él. Jesús se volvió hacia ellas y les dijo: «Hijas de Jerusalén, no lloréis por mí, llorad por vosotras y por vuestros hijos, porque mirad que llegará el día en que dirán: "Dichosas las estériles y los vientres que no han dado a luz y los pechos que no han criado." Entonces empezarán a decirles a los montes: "Desplomaos sobre nosotros", y a las colinas: "Sepultadnos"; porque, si así tratan al leño verde, ¿qué pasara con el seco?» Conducían también a otros dos malhechores para ajusticiarlos con él. Padre, perdónalos, porque no saben lo que hacen. Y, cuando llegaron al lugar llamado «La Calavera», lo crucificaron allí, a él y a los malhechores, uno a la derecha y otro a la izquierda. Jesús decía: «Padre, perdónalos, porque no saben lo que hacen.» Y se repartieron sus ropas, echándolas a suerte. Éste es el rey de los judíos. El pueblo estaba mirando. Las autoridades le hacían muecas, diciendo: «A otros ha salvado; que se salve a sí mismo, si él es el Mesías de Dios, el Elegido.» Se burlaban de él también los soldados, ofreciéndole vinagre y diciendo: «Si eres tú el rey de los judíos, sálvate a ti mismo.» Había encima un letrero en escritura griega, latina y hebrea: «Éste es el rey de los judíos.» Hoy estarás conmigo en el paraíso. Uno de los malhechores crucificados lo insultaba, diciendo: «¿No eres tú el Mesías? Sálvate a ti mismo y a nosotros.» Pero el otro le increpaba: «¿Ni siquiera temes tú a Dios, estando en el mismo suplicio? Y lo nuestro es justo, porque recibimos el pago de lo que hicimos; en cambio, éste no ha faltado en nada.» Y decía: «Jesús, acuérdate de mí cuando llegues a tu reino.» Jesús le respondió: «Te lo aseguro: hoy estarás conmigo en el paraíso.» Padre, a tus manos encomiendo mi espíritu. Era ya eso de mediodía, y vinieron las tinieblas sobre toda la región, hasta la media tarde; porque se oscureció el sol. El velo del templo se rasgó por medio. Y Jesús, clamando con voz potente, dijo: «Padre, a tus manos encomiendo mi espíritu.» Y, dicho esto, expiró. Todos se arrodillan, y se hace una pausa. El centurión, al ver lo que pasaba, daba gloria a Dios, diciendo: «Realmente, este hombre era justo.» Toda la muchedumbre que había acudido a este espectáculo, habiendo visto lo que ocurría, se volvía dándose golpes de pecho. Todos sus conocidos se mantenían a distancia, y lo mismo las mujeres que lo habían seguido desde Galilea y que estaban mirando. Un hombre llamado José, que era senador, hombre bueno y honrado que no había votado a favor de la decisión y del crimen de ellos, que era natural de Arimatea, pueblo de Judea, y que aguardaba el reino de Dios, acudió a Pilato a pedirle el cuerpo de Jesús. Y, bajándolo, lo envolvió en una sábana y lo colocó en un sepulcro excavado en la roca, donde no habían puesto a nadie todavía. Era el día de la Preparación y rayaba el sábado. Las mujeres que lo habían acompañado desde Galilea fueron detrás a examinar el sepulcro y cómo colocaban su cuerpo. A la vuelta, prepararon aromas y ungüentos. Y el sábado guardaron reposo, conforme al mandamiento.`,
    },
  },

  // DÍA 61
  {
    dia: 61,
    lecturaLiturgica: {
      titulo: "Último Triduo de Semana Santa",
      contenido: `Los tres últimos días de la Semana Santa: Jueves, Viernes y Sábado Santo, constituyen el TRIDUO SACRO por excelencia de todo el año litúrgico. Son días excepcionalmente grandes y venerables por los misterios que en ellos se conmemoran y los ritos solemnes con que la Iglesia católica los representa en nuestros templos.

Para acompañar estos misterios nada más apropiado que el uso inteligente del Misal, que va presentando a los fieles, día tras día y rito tras rito, todas las augustas ceremonias conmemorativas de la Pasión, Muerte, Sepultura y Resurrección de Nuestro Señor Jesucristo, Salvador y Redentor del mundo y esperanza de una Vida inmortal.

EL JUEVES SANTO

El Jueves Santo es, según el cantar popular castellano, uno de los tres jueves del año que "relucen más que el sol". Conmemora la Institución de la Eucaristía, el Sacramento del Amor. Es, por lo tanto, el día del gran regalo de Cristo a la humanidad. En vísperas de morir ignominiosamente por nosotros en la Cruz, no podía dejarnos en testamento mayor don que el de su misma Sagrada Persona: su Cuerpo, su Sangre, su Alma y su Divinidad, hechos alimento de nuestra vida espiritual. Por eso es éste un día grande, feliz, consolador. La proximidad de la Pasión del Salvador cohíbe, sin embargo, a la Iglesia un tanto, y pone en la Misa de hoy un dejo de tristeza y de dolor que la liturgia expresa haciendo enmudecer el órgano y las campanas.

Desea la Iglesia que el Jueves Santo sea un día de homenaje público a la Eucaristía, primeramente asistiendo a la Misa solemne, que es repetición de la que, en este mismo día y hora, celebró Jesús en el Cenáculo de Jerusalén instituyendo el Sacrificio del Altar; en segundo lugar comulgando, para cumplir el deber pascual, y por fin visitando devotamente el sagrado Copón del altar del "Monumento". Asimismo la Iglesia exhorta a los cristianos a ejercitar la caridad con los pobres mediante limosnas, visitas de consuelo y asistencia a enfermos y encarcelados.`,
    },
    lecturaEspiritual: {
      titulo: "Lavatorio de los Pies",
      fuente: "Juan 13:1-15",
      contenido: `La víspera del día solemne de la Pascua, sabiendo Jesús que era llegada la hora de su tránsito de este mundo al Padre; como hubiese amado a los suyos, que vivían en el mundo, los amó hasta el fin. Y así, acabada la cena cuando ya el diablo había sugerido en el corazón de Judas, hijo de Simón Iscariote el designio de entregarle; sabiendo Jesús que el Padre le había puesto todas las cosas en las manos, y que, como era venido de Dios, a Dios volvía; levántase de la mesa, y quítase sus vestidos, y habiendo tomado una toalla, se la ciñó. Echó después agua en una jofaina, y púsose a lavar los pies de los discípulos y a secarlos con la toalla que se había ceñido. Llega a Simón Pedro, y Pedro le dice: ¡Señor! ¿Tú lavarme a mí los pies? Respondióle Jesús, y le dijo: Lo que yo hago tú no lo entiendes ahora, lo entenderás después. Dícele Pedro: Jamás me lavarás tú a mí los pies. Respondióle Jesús: Si yo no te lavare, no tendrás parte conmigo. Dícele Simón Pedro: ¡Señor! si así es, no solamente los pies, sino las manos también y la cabeza. Jesús le dice: El que acaba de bañarse no necesita más que lavarse los pies, pues está todo él limpio. Y en cuanto a vosotros, limpios estáis, mas no todos. Porque sabía quién era el que le había de entregar, por eso dijo: No todos estáis limpios. Y después que les hubo lavado los pies, y hubo tomado su vestido, puesto de nuevo a la mesa, díjoles: ¿Sabéis lo que acabo de hacer con vosotros? Vosotros me llamáis maestro y Señor, y decís bien, porque lo soy. Pues si yo, siendo Señor y Maestro, os he lavado los pies; vosotros también debéis lavaros los pies, los unos a los otros. Porque ejemplo os he dado, para que, pensando lo que yo he hecho con vosotros, así lo hagáis vosotros también.`,
    },
  },

  // DÍA 62
  {
    dia: 62,
    lecturaLiturgica: {
      titulo: "Viernes Santo",
      contenido: `La noche del Jueves al Viernes Santo fue la más trágica de la Historia. Jesús la pasó en vela, recibiendo escarnios, insultos y trato infame de la chusma y de la soldadesca; compareciendo de tribunal en tribunal, y sufriendo los más acerbos dolores por nuestro amor. Por lo mismo, la Iglesia celebra la Liturgia de hoy como en la penumbra y con todo el aparato fúnebre: con pocos cirios y amarillos, con ornamentos negros, con cantos lúgubres, con sones de matraca, con "improperios". Asistamos a los Oficios penetrados de un vivo dolor de nuestras culpas, que fueron la causa de la Pasión y Muerte del Redentor.

Después de haber estado privados los fieles, por varios siglos, de la comunión en el día de Viernes Santo, al restituir ahora los Oficios litúrgicos a las horas de la tarde, ha permitido la Iglesia que comulguen, a continuación del Celebrante, todos los que lo deseen y estén bien dispuestos, "para que, recibiendo devotamente el Cuerpo del Señor, muerto por todos nosotros en este día, podamos percibir así más abundantemente los frutos de la Redención y vivir con mayor recogimiento".`,
    },
    lecturaEspiritual: {
      titulo: "Pasión Según San Juan",
      fuente: "Juan 18:1-40; 19:1-42",
      contenido: `En aquel tiempo: Salió Jesús con sus discípulos a la otra parte del torrente Cedrón, donde había un huerto, en el cual entró él con sus discípulos. Judas, que le entregaba, conocía también el sitio, porque Jesús solía retirarse muchas veces a él, con sus discípulos. Judas, pues, habiendo tomado una cohorte de soldados, y varios ministros que le dieron los Pontífices y Fariseos, fue allá con linternas y hachas, y con armas. Y Jesús, que sabía todas las cosas que le habían de sobrevenir, salió a su encuentro, y les dijo: ¿A quién buscáis? C. Respondiéronle: S. A Jesús Nazareno. C. Díceles Jesús: Yo soy. C. Estaba también con ellos Judas, el que le entregaba. Apenas, pues, les dijo: "Yo soy", retrocedieron todos, y cayeron en tierra. Volvió de nuevo a preguntarles: ¿A quién buscáis? C. Y ellos respondieron: S. A Jesús Nazareno. C. Replicó Jesús: Ya os he dicho que yo soy; ahora bien, si me buscáis a mí, dejad ir a éstos. C. Para que se cumpliese la palabra que había dicho: "¡Padre! ninguno he perdido de los que tú me diste". Entretanto, Simón Pedro, que tenía una espada, la desenvainó, y dando un tajazo a un criado del Pontífice, le cortó la oreja derecha. Y este criado llamábase Malco. Pero Jesús dijo a Pedro: Mete tu espada en la vaina. El cáliz que me dio mi Padre he de dejar yo de beberle? C. En fin, la cohorte de soldados, el tribuno y los ministros de los judíos prendieron a Jesús y le ataron. De allí le condujeron primeramente a casa de Anás, porque era suegro de Caifás, que era Sumo Pontífice aquel año. Caifás era el que había dado a los el consejo, que convenía que un hombre muriese por el pueblo. Iba Simón Pedro siguiendo a Jesús, y con él otro discípulo, y este otro discípulo, que era conocido del Pontífice, entró con Jesús en el atrio del Pontífice. Pedro, empero, se quedó fuera, a la puerta. Entonces el otro discípulo, que era conocido del Pontífice, salió y habló con la portera, la cual introdujo a Pedro. Y encarándose con Pedro la portera, le preguntó: S. ¿No eres tú también de los discípulos de este hombre? C. El respondió: S. No lo soy. C. Los criados y ministros, que habían ido a prender a Jesús, estaban a la lumbre, porque hacía frío, y se calentaban; Pedro asimismo estaba con ellos calentándose. Entretanto, el Pontífice interrogó a Jesús sobre sus discípulos y doctrina. A lo que Jesús respondió: Yo he predicado públicamente delante de todo el mundo: siempre he enseñado en Sinagoga y en el Templo, a donde concurren todos los judíos, y nada he hablado en secreto: ¿por qué me preguntas a mí? Pregunta a los que han oído lo que yo les he enseñado, pues ellos saben las cosas que les he predicado. C. A esta respuesta, uno de los ministros asistentes dio una bofetada a Jesús, diciendo: S. ¿Así respondes tú al Pontífice? C. Replicó Jesús: Si yo he hablado mal, prueba lo malo que he dicho; y si he hablado bien, ¿por qué me hieres? C. Habíale enviado Anás, atado, al Pontífice Caifás. Y estaba allí, de pie, Simón Pedro, calentándose; y le dijeron: S. ¿No eres tú también de sus discípulos? C. Él lo negó, diciendo: S. No lo soy. C. Dícele uno de los criados del Pontífice, pariente de aquél cuya oreja había cortado Pedro. S. Pues qué, ¿no te vi yo en el huerto con él? C. Y Pedro negó otra vez, y al punto cantó el gallo. Llevaron después a Jesús desde la casa de Caifás al Pretorio. Era muy de mañana; y ellos no entraron en el Pretorio por no contaminarse, y para poder comer el cordero pascual. Por eso Pilato salió fuera y les dijo: S. ¿Qué acusación traéis contra este hombre? C. Respondieron, y dijéronle: S. Si éste no fuera malhechor, no te lo hubiéramos entregado. C. Replicóles Pilato: S. Pues tomadlo vosotros, y juzgadle según vuestra ley. C. Los judíos le dijeron: S. A nosotros no nos es permitido matar a nadie; C. Con lo que vino a cumplirse lo que Jesús dijo, indicando el género de muerte de que había de morir. Oído esto, Pilato entró de nuevo en el Pretorio, y llamando a Jesús le preguntó: S. ¿Eres tú el Rey de los judíos? C. Respondió Jesús: ¿Dices tú eso por tu cuenta, o te lo han dicho de mí otros? C. Replicó Pilato: S. Qué, ¿acaso soy yo judío? Tu nación y los Pontífices te han entregado a mí; ¿qué has hecho? C. Respondió Jesús: Mi reino no es de este mundo; claro si de este mundo fuera mi reino, mis gentes me habrían defendido para que no cayese en manos de los Judíos; mas mi reino no es de acá. C. Replicóle a esto Pilato: S. ¿Conque tú eres Rey? S. Respondió Jesús: Así es, como dices: yo soy Rey. Yo para esto nací, y para esto vine al mundo, para dar testimonio de la verdad; todo aquel que es hijo de la verdad escucha mi voz. C. Dícele Pilato: S. ¿Qué es la verdad? C. Cuando esto hubo dicho, salió por segunda vez a los judíos, y les dijo: S. Yo ningún delito hallo en este hombre: mas ya que tenéis costumbre de que os suelte un reo por la Pascua ¿queréis que ponga en libertad al Rey de los judíos? C. Entonces todos ellos volvieron a gritar: S. No a ése, sino a Barrabás. C. Y, sin embargo, Barrabás era un ladrón. Tomó, pues, Pilato a Jesús, y mandó azotarle. Y los soldados formaron una corona de espinas entretejidas, y se la pusieron sobre su cabeza; y le vistieron un manto de púrpura. Y se le acercaban, y le decían: S. Salve, oh Rey de los judíos. C. Y dábanle de bofetadas. Pilato, empero, salió otra vez fuera, y dijo: S. Ved que os lo saco fuera, para que os conste que yo no hallo en él delito alguno. C. (Salió, pues, Jesús, llevando la corona de espinas y un manto de púrpura). Y les dijo Pilato: S. Ved aquí al hombre. C. Luego que los Pontífices y sus ministros le vieron, alzaron el grito, diciendo: S. Crucifícale! Crucifícale! C. Díceles Pilato: S. Tomadlo allá vosotros y crucificadle, que yo no hallo en él delito. C. Respondieron los judíos: S. Nosotros tenemos una ley, y según esta ley debe morir, porque se ha hecho Hijo de Dios. C. Cuando Pilato oyó esta acusación, se llenó más de temor. Y volviendo a entrar en el Pretorio, dijo a Jesús: S. ¿De dónde eres tú? C. Mas Jesús no le respondió palabra. Por lo que Pilato le dice: S. ¿A mí no me hablas? ¿No sabes que tengo poder para crucificarte y para soltarte? C. Respondió Jesús: No tendrías poder alguno sobre mí, si no te hubiera sido dado de arriba. Por tanto, el que a ti me ha entregado, mayor pecado tiene. C. Desde aquel punto, Pilato procuraba libertarle. Pero los judíos gritaban, diciendo: S. Si lo sueltas a ése, no eres amigo de César; porque todo aquel que se hace rey, se declara contra el César. C. Pilato, al oír estas palabras, sacó a Jesús fuera; y sentóse en su tribunal, en el lugar llamado "Litóstrotos" y en hebreo "Gábbata". Era entonces el día de la Preparación de la Pascua, cerca del mediodía, y dijo a los judíos: S. Ahí tenéis a vuestro Rey. C. Ellos empero gritaban: ¡Quita, quítale de en medio: crucifícale! C. Díceles Pilato: S. ¿A vuestro Rey he de crucificar? C. Respondieron los Pontífices: S. No tenemos más Rey que el César. C. Entonces se le entregó para que le crucificasen. Apoderáronse, pues, de Jesús y le sacaron fuera. Y llevando él mismo a cuestas su Cruz, fue caminando hacia el sitio llamado Calvario, y en hebreo Gólgota, donde le crucificaron, y con él a otros dos, uno a cada lado, quedando Jesús en medio. Y Pilato escribió un título y lo puso sobre la Cruz. Y la inscripción decía: "Jesús Nazareno, Rey de los Judíos". Y muchos de los Judíos leyeron este título; porque estaba cerca de la ciudad el lugar en donde crucificaron a Jesús. Y el título estaba escrito en hebreo, en griego y en latín. Y decían a Pilato los Pontífices de los judíos: S. No escribas "Rey de los judíos", sino que él dijo: "Rey soy de los judíos", C. Respondió Pilato: S. Lo escrito, escrito está. C. Los soldados, después de haber crucificado a Jesús, tomaron sus vestidos (de que hicieron cuatro partes, una para cada soldado), y la túnica; la cual era sin costura, y de un solo tejido de arriba abajo. Por lo que dijeron entre sí: S. No la dividamos; mas echemos suerte para ver de quién será. Con lo que se cumplió la Escritura, que dice: "Repartieron entre sí mis vestidos y sortearon mi túnica". Y esto es lo que hicieron los soldados. Y estaban junto a la Cruz de Jesús, su Madre, María, mujer de Cleofás, y María Magdalena. Y como vio Jesús a su Madre y al discípulo que Él amaba, el cual estaba allí, dice a su Madre: Mujer, ahí tienes a tu hijo. C. Después dice al discípulo: Ahí tienes a tu madre. C. Y desde aquella hora el discípulo la acogió en su casa.

Después de esto, sabiendo Jesús que todas las cosas estaban a punto de ser cumplidas, para que se cumpliese la Escritura, dijo: Tengo sed. C. Había allí un vaso lleno de vinagre. Los soldados, pues, empapando una esponja y sujetándola a una caña de hisopo, aplicáronla a su boca. Jesús, C. Como era día de Preparación de la Pascua, para que los cuerpos no quedasen en la Cruz el Sábado, que cabalmente era un Sábado solemne, suplicaron los judíos a Pilato que se les quebrasen las piernas a los crucificados, y los quitasen de allí. Vinieron, pues, los soldados y quebraron las piernas del primero y las del otro que había sido crucificado con él. Mas al llegar a Jesús, como le vieron ya muerto, no le quebraron las piernas, sino que uno de los soldados le abrió el costado con su lanza, y al instante salió sangre y agua. Quien lo vio es el que lo asegura, y su testimonio es verdadero. Y él sabe que dice la verdad, y la atestigua para que vosotros también creáis (15). Pues estas cosas sucedieron para que se cumpliese la Escritura, que dice: "No le quebrareis ni un hueso". Y también el otro lugar de la Escritura, que dice: "Pondrán los ojos en aquel a quien traspasaron" Después de esto, José, natural de Arimatea, que era discípulo de Jesús, (aunque a ocultas, por miedo de los judíos), pidió licencia a Pilato para recoger el cuerpo de Jesús; y Pilato se lo permitió. Llegóse, pues, y se llevó el cuerpo de Jesús. Vino también Nicodemo, aquél que en otra ocasión había ido de noche a entrevistarse con Jesús, y trajo consigo una confección, como de cien libras, de mirra y áloe. Tomaron, pues, el cuerpo de Jesús, y lo envolvieron en lienzos rociados con aromas, como los judíos acostumbraban sepultar. Había en el lugar, donde fue crucificado, un huerto, y en el huerto un sepulcro nuevo, donde hasta entonces ninguno había sido sepultado. Como era la víspera del sábado de los judíos, y el sepulcro estaba cerca, pusieron allí a Jesús.`,
    },
  },

  // DÍA 63
  {
    dia: 63,
    lecturaLiturgica: {
      titulo: "Sábado Santo",
      contenido: `Jesucristo fue ayer sepultado y hoy continúa en el Sepulcro. Por eso el día de hoy, históricamente considerado, es día de desolación y de supremo luto para la Iglesia y para todos sus hijos. En atención a esta tan grave circunstancia, no hay hoy en ningún templo del mundo ni Misa ni Comunión (excepto el Viático para los enfermos en peligro de muerte), dejando lugar a la meditación individual y colectiva de la sagrada Pasión y Muerte del Redentor y veneración del Santo Sepulcro. Así el pueblo cristiano se prepara mejor, orando y confesándose, para las alegrías santas de la Resurrección. Estas empezarán con los solemnes Oficios de la "Vigilia Pascual", con que terminará la noche del Sábado y amanecerá el Domingo de Pascua.

Aunque se supriman hoy las misas, rézanse o cántanse de madrugada los Maitines y Laudes (Oficio de "tinieblas"), que vienen a ser como las "Exequias" del Señor, muerto y sepultado, con Lamentaciones, Responsos y Antífonas de soberana elocuencia y melodías con un dejo de agudo dolor y dulce compasión.`,
    },
    lecturaEspiritual: {
      titulo: "La Resurrección",
      fuente: "Mateo 28:1-7",
      contenido: `La primera aparición de Jesús resucitado fue, sin duda, a Madre Santísima, en la intimidad de su casa; pero la primera que relata el Evangelio es la que a continuación leemos que fue hecha a las Marías, en seguida, quizá, de suceder el hecho. Un Ángel del cielo es el que da testimonio del suceso. ¿Quién podrá ponerlo en duda?

Avanzada ya la noche del sábado, al amanecer el primer día de la semana, fue María Magdalena, con la otra María, a visitar el sepulcro. Entonces se produjo un gran terremoto; pues bajó del cielo un Ángel del Señor, y acercándose al Sepulcro removió la piedra, y sentóse encima de ella, y su semblante brillaba como el relámpago, y era su vestidura blanca como la nieve. De lo cual quedaron los guardas tan aterrados que estaban como muertos. Mas el Ángel, dirigiéndose a las mujeres, les dijo: "No temáis: que bien sé yo que venís en busca de Jesús, que fue crucificado; ya no está aquí: porque ha resucitado, según lo tenía predicho. Venid, y mirad el lugar en donde estaba sepultado el Señor. Y ahora, id aprisa a decir a sus discípulos que ha resucitado; y sabed que irá delante de vosotros a Galilea: allí le veréis. Mirad que os lo digo con anticipación.`,
    },
  },

  // DÍA 64
  {
    dia: 64,
    comentario: `¡FELIZ Y SANTA PASCUA DE RESURRECCIÓN!`,
    lecturaLiturgica: {
      titulo: "Domingo de Resurrección",
      contenido: `TIEMPO PASCUAL

Se llama TIEMPO PASCUAL a los días que median entre Pascua de Resurrección y Pascua de Pentecostés. Cristo pudo dar por terminada su permanencia en la tierra el día de su Resurrección; pero prefirió convivir con los suyos cuarenta días más: 1° para consolarlos de las tristezas y amarguras sufridas con motivo de Pasión y Muerte; 2° para robustecer su fe en el misterio de la resurrección, fundamento de todos los demás misterios cristianos; 3° para estimular la esperanza en la resurrección universal, fruto y como corolario de la suya; 4° para confidenciar con ellos acerca de ciertos puntos de doctrina y sobre la Organización de la Iglesia; y 5° para instituir algunos Sacramentos. Tales son también las preocupaciones de la liturgia pascual. Los ornamentos blancos, el uso de floreros en el altar, los frecuentes aleluyas, la presencia del Cirio pascual en el presbiterio, todo nos convida a la alegría y a celebrar el triunfo de la Resurrección.

DOMINGO DE RESURRECCIÓN

El Domingo de Pascua es el día verdaderamente grande y esplendoroso de la Iglesia de Dios. La idea del triunfo de Cristo sobre sus enemigos lo llena todo. Todos los textos del rezo litúrgico y de la misa son gritos de victoria, reforzados por repetidos y jubilosos aleluyas. Esta Pascua es como la primavera de las almas: en ella se renueva todo, y sobre todo se robustecen la fe, la esperanza y la caridad. Haber resucitado Cristo es haber dado al mundo, creyente o no, la firma más auténtica de la verdad de su Religión y, por lo tanto, de la divinidad de su Iglesia. ¡Al Cordero vencedor y siempre glorificado, sea hoy y siempre, todo honor, gloria, alabanza y bendición!`,
    },
    lecturaEspiritual: {
      titulo: "La Resurrección del Señor",
      fuente: "Marcos 16:1-7",
      contenido: `En aquel tiempo: María Magdalena y María, madre de Santiago y Salomé, compraron aromas para ir a embalsamar a Jesús. Y saliendo muy de mañana, el primer día de la semana, llegaron al sepulcro cuando había salido ya el sol. Y decía una a la otra: ¿Quién nos apartará la piedra de la entrada del sepulcro. Y fijándose bien, vieron apartada la piedra, que era muy grande. Y entrando en el sepulcro, vieron a un joven sentado a la diestra, vestido de blanco, y se asustaron. Mas él les dijo: ¡No temáis! Ya sé que buscáis a Jesús Nazareno, crucificado: pues bien, resucitó; no está aquí: ved el lugar en donde le pusieron. Mas id, y decid a sus discípulos y a Pedro, que va a ir delante de vosotros a Galilea: allí le veréis, como os lo anunció.`,
    },
  },

  // DÍA 65
  {
    dia: 65,
    comentario: `Ayer concluyó el itinerario que iniciamos hace 65 días. Hemos recorrido de la mano del Patriarca San Benito y la Liturgia estos días. Tratemos de perseverar en este camino que realmente concluye en el Cielo. San Benito, ¡ora pro nobis!`,
  },
];

// Lectura por defecto para días sin contenido cargado
const LECTURA_DEFAULT: Lectura = {
  dia: 0,
  lecturaEspiritual: {
    titulo: "Lectura del día",
    fuente: "Regla de San Benito",
    contenido: `"Escucha, hijo, los preceptos del maestro e inclina el oído de tu corazón; recibe con gusto el consejo de un padre piadoso y ponlo por obra, a fin de que por el trabajo de la obediencia vuelvas a Aquel de quien te habías alejado por la desidia de la desobediencia."

Esta lectura será provista próximamente. Mientras tanto, te invitamos a rezar el Oficio Divino del día.`,
  },
};

// Función para obtener la lectura de un día específico
export function getLectura(dia: number): Lectura {
  const lectura = LECTURAS.find((l) => l.dia === dia);
  if (lectura) {
    return lectura;
  }
  // Retornar lectura por defecto con el día correcto
  return {
    ...LECTURA_DEFAULT,
    dia,
  };
}

// Función para verificar si un día tiene lectura cargada
export function tieneContenido(dia: number): boolean {
  return LECTURAS.some((l) => l.dia === dia);
}
