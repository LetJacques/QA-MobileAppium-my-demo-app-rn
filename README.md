# Appium MyDemoAppRN Test

Este repositório contém um teste básico utilizando **Appium** para automatizar o login na aplicação **MyDemoAppRN**, disponível no repositório oficial [saucelabs/my-demo-app-rn](https://github.com/saucelabs/my-demo-app-rn).

## Tecnologias Utilizadas

- **Appium**: Framework para automação de testes móveis.
- **Android Studio**: IDE utilizada para emular o dispositivo Android.
- **Appium Inspector**: Ferramenta para inspecionar o aplicativo e capturar os localizadores dos elementos.
- **VS Code**: Editor de código utilizado no desenvolvimento do teste.
- **WebdriverIO**: Utilizado para executar os testes com Appium.

## Estrutura do Projeto

- **login.e2e.js**: Arquivo principal com o teste automatizado.
- **data/userData.json**: Contém os dados do usuário (credenciais).
- **screen/login.screen.js**: Contém a classe `LoginScreen` com os métodos para interagir com a tela de login.
- **screen/menu.screen.js**: Contém a classe `MenuScreen` com os métodos para acessar o menu.
