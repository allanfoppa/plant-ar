# PLANT-AR

## DESCOBRIR O IP

### LINUX - UBUNTU

[IP no Linux](https://help.ubuntu.com/stable/ubuntu-help/net-findip.html.en)

### WINDOWS

You can find your local network's IP by go to `Command Prompt` or press Windows + R then type in `ipconfig`. It will give out some information and your local IP should look like `192.168.1.x.`

## SSL CERTIFICADO

[Como criar CRT e KEY](https://medium.com/webisora/how-to-enable-https-on-live-server-visual-studio-code-5659fbc5542c)

## LIVE SERVER

Instalar a extensão do VSCode `Live Server`

## SETAR AS DEFINIÇÕES PARA O CONSUMO DO SSL

Em `.vscode/settings.json` colocar o caminho do certificado na máquina (em exemplo está o caminho onde o projeto esta no meu computador)

## RODAR A APLICAÇÃO

- Passo 1: Selecionar o arquivo `index.html` e no VSCode na barra inferior a direita, clicar em `GO Live`
- Passo 2: Abrir o navegador com a seguinte URL: https://IP:5500/index.html
- Passo 3: clicar em `advanced` para acessar (apenas na primeira vez ou se limpar a confirmação)
- Passo 4: clicar em `Proceed to 0.0.0.0 <-IP (unsafe)` (apenas na primeira vez ou se limpar a confirmação)
