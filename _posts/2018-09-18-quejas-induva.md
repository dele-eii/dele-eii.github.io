---
layout: posts
date: '2018-09-18 17:02 +0200'
image: /media/aularioIndUVa.jpg
disqus: false
published: true
title: Quejas IndUVa
description: Cuentanos los problemas del nuevo edificio
---
Desde la Delegación de Alumnos somos conscientes de que hay problemas y carencias en el nuevo edificio IndUVa, por eso queremos que contactes con nosotros y nos cuentes los problemas que tu has visto para poderles dar solución a la mayor brevedad posible.

Puedes contactarnos por <a class="icon-telegram link-telegram" href="https://telegram.me/{{ site.telegram }}">Telegram</a> o mediante el siguiente formulario.

## Formulario de contacto

<form class="needs-validation" novalidate action="https://formspree.io/alumnos.eii@uva.es" method="POST">
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" class="form-control" id="email" name="_replyto">
    <small id="emailHelp" class="form-text text-muted"></small>
    <div class="invalid-feedback">
      Introduce un correo valido.
    </div>
  </div>
  <div class="form-group">
    <label for="asunto">Asunto:</label>
    <input type="text" class="form-control" id="asunto" name="_subject" required>
    <div class="invalid-feedback">
      Rellena este campo.
    </div>
  </div>
  <div class="form-group">
    <label for="mensaje">Mensaje:</label>
    <textarea type="text" class="form-control" id="mensaje" name="mensaje" required></textarea>
    <div class="invalid-feedback">
      Rellena este campo.
    </div>
  </div>
    <input type="submit" class="btn btn-outline-secondary" value="Enviar">
    <input type="hidden" name="_format" value="plain">
    <input type="hidden" name="_language" value="es">
    <!-- <input type="hidden" name="_next" value="{{site.url}}{{site.baseurl}}/contactar/">-->
</form>

{% include validation.html %}
