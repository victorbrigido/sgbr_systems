SGBr Systems - Instruções para Rodar o Projeto

📋 Pré-requisitos

Antes de começar, verifique se você tem os seguintes softwares instalados:

1. **Node.js** (versão recomendada: 16 ou superior)  
   - Baixar em: [https://nodejs.org](https://nodejs.org)

2. **Git**  
   - Baixar em: [https://git-scm.com](https://git-scm.com)

3. **Expo CLI**  
   - Instalar globalmente:
     ```bash
     npm install -g expo-cli
     ```

4. **Simulador ou Dispositivo Físico**  
   - Android Studio (para emulador Android).  
   - Xcode (para emulador iOS) — apenas em macOS.  
   - **Ou** o aplicativo Expo Go no seu dispositivo móvel:
     - Android: [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
     - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)

---

🔧️ Como Rodar o Projeto

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/victorbrigido/sgbr_systems.git
   
Navegue para o Diretório do Projeto

cd sgbr_systems

Instale as Dependências

  ```bash
npm install
```

# ou, se você usa Yarn:
  ```bash
  yarn install
```
Inicie o Servidor do Expo
```bash
npx expo start
```
Escolha o Dispositivo

Simulador Android/iOS:

Certifique-se de que o emulador esteja aberto antes de iniciar.

No terminal, pressione a para Android ou i para iOS.

Dispositivo Físico:

Abra o aplicativo Expo Go no dispositivo.

Escaneie o QR Code exibido no terminal ou no navegador.

⚙️ Problemas Comuns e Soluções

Erro Cannot find module:

Certifique-se de que todas as dependências estão instaladas corretamente:
```bash
npm install
`
Aplicativo não inicia no simulador:

Verifique se o simulador está em execução antes de iniciar o projeto.

Expo não reconhece o dispositivo físico:

Certifique-se de que seu dispositivo está conectado à mesma rede Wi-Fi que o computador.
