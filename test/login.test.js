const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('Login Page Test', function(){
    it('should have correct header: Login Page', function(){
        LoginPage.open()
        expect(LoginPage.pageHeader).toHaveText('Login Page')
    })

    it('should generate an alert when user tries to login with incorrect credentials', function(){
        LoginPage.login('tomsmith', 'SuperSecretPassword')
        expect(LoginPage.flashAlert).toBeExisting()
    })

    it('should redirect to Secure Page when user logs in with correct credentials', function(){
        LoginPage.login('tomsmith', 'SuperSecretPassword!')
        expect(SecurePage.flashAlert).toBeExisting()
        expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
    })
})


