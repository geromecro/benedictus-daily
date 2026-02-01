// Lecturas diarias de Benedictus 2026
// Del 1 de febrero (Septuagésima) al 5 de abril (Pascua)

export interface Lectura {
  dia: number;
  comentario?: string;
  lecturaLiturgica?: {
    titulo: string;
    contenido: string;
  };
  lecturaEspiritual: {
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
    comentario: `Hoy es día de Fiesta, acompañemos la festividad en lo posible con la Santa Misa. Que esta celebración llene de alegría nuestra jornada, y acompañemos con el rezo del Oficio Divino la festividad.`,
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
