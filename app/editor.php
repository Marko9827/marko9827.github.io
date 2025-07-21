<!DOCTYPE html>
<html>

<head>
    <title>Monaco Editor Web Component</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
        @import url(https://cdn.markonikolic98.com/node_modules/monaco-editor@0.45.0/min/vs/editor/editor.main.css);
     
    </style>
    <script type="text/javascript" src="https://unpkg.com/monaco-editor@0.45.0/min/vs/loader.js"></script>
</head>

<body>
    <monaco-editor-app></monaco-editor-app>

    <script>
class ContactFormBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const style = document.createElement("style");
    style.textContent = `
      @import url('/mainss');
    `;

    const wrapper = document.createElement("div");
    wrapper.className = "contanct_frm";
    wrapper.innerHTML = `
      <div class="h5_div">
        <img src="https://markonikolic98.com/svg_logo_backscr_img" loading="lazy" class="logo_backscr_img_cnt" alt="Loading">
        <i class="bi bi-inbox"></i> Contact me <i class="closec bi bi-x-lg"></i>
      </div>
      <form autocomplete="off">
        <p class="msg"></p>
        <label for="fname">Full Name</label>
        <i class="input_icon bi bi-quote"></i>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">

        <label for="lname">Your Email</label>
        <i class="input_icon bi bi-envelope"></i>
        <input type="email" id="lname" name="email" placeholder="Your Email..">

        <label for="subject" class="message_lenght">Message </label>
        <textarea id="subject" name="subject" placeholder="Your message..." style="height:200px"></textarea>

        <label for="norobot">Solve math problem. I'm not a robot</label>
        <input type="number" id="norobot" name="norobot" placeholder="">
      </form>
      <fotter><button type="button" id="sendbtn">Send message</button></fotter>
    `;

    this.shadowRoot.append(style, wrapper);

    const form = wrapper.querySelector("form");
    const msg = form.querySelector(".msg");
    const btn = wrapper.querySelector("#sendbtn");
    const captchaInput = form.querySelector("#norobot");

    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    captchaInput.placeholder = `${num1} + ${num2} = ?`;

    btn.addEventListener("click", async () => {
      const name = form.querySelector("#fname").value.trim();
      const email = form.querySelector("#lname").value.trim();
      const message = form.querySelector("#subject").value.trim();
      const captcha = parseInt(captchaInput.value);

      if (!name || !email || !message || isNaN(captcha)) {
        msg.textContent = "Please fill all fields correctly.";
        return;
      }

      if (captcha !== num1 + num2) {
        msg.textContent = "Wrong math answer!";
        return;
      }

      const payload = { name, email, message };

      try {
        const res = await fetch(this.getAttribute("ajax-url") || "/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        msg.style.color = res.ok ? "lightgreen" : "tomato";
        msg.textContent = res.ok ? "Message sent!" : "Failed to send message.";
        if (res.ok) form.reset();
      } catch (e) {
        msg.textContent = "Error occurred.";
        msg.style.color = "red";
      }
    });
  }
}

customElements.define("contact-form-box", ContactFormBox);




    </script>
    <contact-form-box></contact-form-box>
</body>

</html>