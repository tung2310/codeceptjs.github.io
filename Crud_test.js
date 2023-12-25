Feature('Test Add');

Scenario('2. Test add', async  ({ I }) => {
    //1. On page and login
    I.amOnPage("/");
    I.wait(2);
    I.see("Login", "h5");

    I.fillField("input[name='username']", "Admin");
    I.fillField("input[name='password']", "admin123");

    I.click("Login", "button");
    I.wait(3);

    // 2. Go to Admin tab
    I.click('a[href="/web/index.php/admin/viewAdminModule"]');
    I.wait(3);

    // 3. Click button Add to go to register page
    I.click(".orangehrm-header-container button");
    I.wait(3);

    // 4. Fill information
    I.click('(//i[contains(@class, "oxd-select-text--arrow")])[position()=1]')
    I.wait(1);
    I.click('(//div[contains(@class, "oxd-select-option")])[position()=2]');

    I.click('(//i[contains(@class, "oxd-select-text--arrow")])[position()=2]')
    I.wait(1);
    I.click('(//div[contains(@class, "oxd-select-option")])[position()=2]');

    I.fillField('input[placeholder="Type for hints..."]', "Odis  Adalwin");
    I.wait(5);
    I.click('(//div[contains(@class, "oxd-autocomplete-option")])[position()=1]');

    I.fillField('input[autocomplete="off"]', 'TungTD17');

    I.fillField('(//input[contains(@type, "password")])[position()=1]', "Tung1998$");

    I.fillField('(//input[contains(@type, "password")])[position()=2]', "Tung1998$");

    // 5. Click button Save
    I.click("button[type='submit']");

    I.wait(2);
    I.saveScreenshot("testAdd.png", true);
});

Scenario('3. Update admin', async ({I}) => {
    //1. On page and login
    I.amOnPage("/");
    I.wait(2);
    I.see("Login", "h5");

    I.fillField("input[name='username']", "Admin");
    I.fillField("input[name='password']", "admin123");

    I.click("Login", "button");
    I.wait(3);

    // 2. Go to Admin tab
    I.click('a[href="/web/index.php/admin/viewAdminModule"]');
    I.wait(3);

    // 3. Search record can update
    I.fillField("form.oxd-form input", "TungTD17");
    I.click("button[type=submit]");
    I.wait(5);

    // 4. Select record and go to update page
    I.click("i.bi-pencil-fill");
    I.wait(3);

    // 5. Update fields
    I.click('(//i[contains(@class, "oxd-select-text--arrow")])[position()=2]')
    I.wait(1);
    I.click('(//div[contains(@class, "oxd-select-option")])[position()=3]');

    // 6. Click button Save
    I.click("button[type=submit]");
    I.wait(2);
    I.saveScreenshot("testUpdate.png", true);
});

Scenario("4. Delete admin", async ({I}) => {
    //1. On page and login
    I.amOnPage("/");
    I.wait(2);
    I.see("Login", "h5");

    I.fillField("input[name='username']", "Admin");
    I.fillField("input[name='password']", "admin123");

    I.click("Login", "button");
    I.wait(3);

    // 2. Go to Admin tab
    I.click('a[href="/web/index.php/admin/viewAdminModule"]');
    I.wait(3);

    // 3. Search record can update
    I.fillField("form.oxd-form input", "TungTD17");
    I.click("button[type=submit]");
    I.wait(5);

    // 4. Select record and click icon delete
    I.click("i.bi-trash");
    I.wait(3);
    I.click("button.oxd-button--label-danger");

    I.wait(2);
    I.saveScreenshot("testDelete.png", true);
});