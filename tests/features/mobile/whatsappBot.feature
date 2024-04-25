@mobile @Whatsapp @clearChat
Feature: Whatsapp bot
  Scenario: el bot responde deacuerdo a lo esperado en las opciones 4-8
    Given que abro whatsapp
    When selecciono mi contacto "Bot Prod"
    And envio "hola" en el chat
    Then uno de los mensajes de respuesta es:
      """
      ¡Hola!👋 Soy MI-A, asistente virtual del Banco Ganadero y te ayudaré en todo lo que necesites.
      """
    And uno de los mensajes de respuesta es:
      """
      Escribe el número de la opción que deseas consultar:
      1- Cuentas Ahorro/Corrientes 💵
      Saldos, movimientos y tipo de cuentas.
      2- Tarjetas💳
      Guías de habilitaciones
      3- Agencias, Cajeros y Kioscos 🏦
      Encuentra ubicaciones y horarios
      4- Aplicación GanaMóvil 📱
      Conoce como utilizar la App
      5- Giros y Remesas 💸
      Guías de cobro, código Swift
      6- Productos de Crédito 🏠🚗✈
      Información, requisitos y condiciones
      7- Preguntas Frecuentes ❓
      Consultas Generales
      8- Beneficios y Sorteos Ganadoble 💰
      Novedades y beneficios para ti
      9- Chatea con alguien del Banco 👤
      Habla con un representante
      """
    And envio "3" en el chat
    And uno de los mensajes de respuesta es:
      """
      Espero haber podido responder a tu consulta. 
      ¿Necesitas ayuda adicional?
      1- Volver Menu Principal
      2- Hablar con un Operador
      3- Finalizar
      """
    And uno de los mensajes de respuesta es:
      """
      Hemos habilitado la geolocalización!!!, Conoce ubicaciones cercanas de oficinas, cajeros automáticos, y kioscos en el siguiente enlace: https://www.bg.com.bo/sucursales/
      Lista de oficinas y horarios: https://prodbgwebportal.blob.core.windows.net/assets/pdf-sucursales-oficinas.pdf
      """
    And envio "3" en el chat
    And uno de los mensajes de respuesta es:
      """
      Gracias por comunicarse con el Banco Ganadero, queremos conocer tu experiencia, favor te pedimos realizar esta breve encuesta https://chatbotbg.questionpro.com
      """

  Scenario: el bot responde deacuerdo a lo esperado en las opciones 4
    Given que abro whatsapp
    When selecciono mi contacto "Bot Prod"
    And envio "hola" en el chat
    Then uno de los mensajes de respuesta es:
      """
      ¡Hola!👋 Soy MI-A, asistente virtual del Banco Ganadero y te ayudaré en todo lo que necesites.
      """
    And uno de los mensajes de respuesta es:
      """
      Escribe el número de la opción que deseas consultar:
      1- Cuentas Ahorro/Corrientes 💵
      Saldos, movimientos y tipo de cuentas.
      2- Tarjetas💳
      Guías de habilitaciones
      3- Agencias, Cajeros y Kioscos 🏦
      Encuentra ubicaciones y horarios
      4- Aplicación GanaMóvil 📱
      Conoce como utilizar la App
      5- Giros y Remesas 💸
      Guías de cobro, código Swift
      6- Productos de Crédito 🏠🚗✈
      Información, requisitos y condiciones
      7- Preguntas Frecuentes ❓
      Consultas Generales
      8- Beneficios y Sorteos Ganadoble 💰
      Novedades y beneficios para ti
      9- Chatea con alguien del Banco 👤
      Habla con un representante
      """
    And envio "4" en el chat
    And uno de los mensajes de respuesta es:
      """
      Escribe el número de la opción que deseas consultar:
      1- ¿Qué es GanaMóvil?
      2- Guía de habilitación GanaMóvil
      3- ¿Cómo habilitar GanaMóvil en otro dispositivo?
      4- Guía para transferencias desde GanaMóvil
      5- Pasos Adicionar Cuentas en GanaMóvil
      6- Pago de Servicios  desde GanaMóvil
      7- Modificación Límites Transacciones GanaMóvil
      8- ¿Cómo Bloqueo el acceso de GanaMóvil de un Dispositivo?
      9- Menú principal
      """
    And envio "1" en el chat
    And uno de los mensajes de respuesta es:
      """
      GanaMóvil es la aplicación de Banco Ganadero, un servicio que te permite acceder a tus cuentas y realizar diversas transacciones las 24 horas al día desde tu dispositivo móvil mediante acceso a internet.
      Puedes descargar la aplicación desde App Store o Play Store.
      Conoce todo lo que puedes hacer con Ganamóvil en el siguiente enlace: https://prodbgwebportal.blob.core.windows.net/assets/pdf-instructivo-de-uso-apliacion-ganamovil.pdf
      """

    And uno de los mensajes de respuesta es:
      """
      Espero haber podido responder a tu consulta. 
      ¿Necesitas ayuda adicional?
      1- Volver Menu Principal
      2- Hablar con un Operador
      3- Finalizar
      """
    And envio "3" en el chat
    And uno de los mensajes de respuesta es:
      """
      Gracias por comunicarse con el Banco Ganadero, queremos conocer tu experiencia, favor te pedimos realizar esta breve encuesta https://chatbotbg.questionpro.com
      """
    