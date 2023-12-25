Feature('Test Search');

Scenario('1. Test search', async  ({ I }) => {
    I.amOnPage("/");
    I.wait(2);
    I.see("Login", "h5");

    I.fillField("input[name='username']", "Admin");
    I.fillField("input[name='password']", "admin123");

    I.click("Login", "button");

    I.wait(3);
    I.see("Admin", "a > span");

    I.click("Admin", "a > span");
    I.wait(3);

    I.fillField("form.oxd-form input", "Admin");
    I.click("i.oxd-select-text--arrow");

    I.forceClick('Admin', 'div.oxd-select-option span');
    // I.wait(3);
    // I.click("ESS");
    I.click("button[type=submit]");   

    I.wait(5);
});


{/* <div role="listbox" class="oxd-select-dropdown --positon-bottom" loading="false" data-v-40acfd38="" data-v-13cf171c="">
    <div role="option" class="oxd-select-option" data-v-d130bb63="" data-v-13cf171c="">-- Select --</div>
    <div role="option" class="oxd-select-option" data-v-d130bb63="" data-v-13cf171c=""><span data-v-13cf171c="">Admin</span></div>
    <div role="option" class="oxd-select-option" data-v-d130bb63="" data-v-13cf171c=""><span data-v-13cf171c="">ESS</span></div></div> */}
