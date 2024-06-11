# BLUE POINTS 🔵
***Crie oceanos de possibilidades***


<div>
<img align="center" alt="logo1" height=30%  width=30% src="documentacao/diagrama/BluePointsLogo.png" />
<img align="center" alt="logo" height=30%  width=30% src="documentacao/diagrama/BluePointsLogo2.png" />
</div>




Aplicação em desenvolvimento desde 27/05/2024*
### [Link para o GIT](https://github.com/BeatrizSanti/BluePoints.git)


<a id="_Integrantes"></a>

# 1 - Integrantes
    Ana Luiza Fontes Franco
    Beatriz Fon Ehnert de Santi
    Matheus Felipe Camarinha Duarte
    Mirelly Ribeiro Azevedo
    Gabriel Francisco Lobo

<a id="_NossaProposta"></a>

# 2 - Nossa proposta
[Vídeo Picht](https://youtu.be/mFvFRHsU8Xg?si=P_9WpOjzJNJ6lnDd )
<br>
** Verificar o [Documento explicativo](documentacao/diagramas.md)

** Verificar os [Diagramas da aplicação](documentacao/BluePoints.pdf)
<br>
Nosso projeto se trata do uso de um aplicativo para pontuar e premiar pessoas que estão auxiliando na recolha de lixo nas praias.
A identificação é feita com uma IA criada em python por nós para distinguir diferentes tipos de lixo e pontuar de maneiras diferentes cada um deles.
Nosso App é criado em React Native e faz consumo de Java e da IA como API. Quanto a .NET faz um site para controle dos prêmios (nome e custo).
Java é responsável por gerênciar o banco de dados. A princípio, nosso aplicativo não fará o controle de premios via banco de dados nem dos locais onde irão ocorrer os eventos.


<a id="_Instrucoes"></a>

# 3 - Aplicação Java

### 1. Clone o Repositório
`git clone https://github.com/BeatrizSanti/BluePointsProject.git`

### 2. Entrar em:

src > main > java > br.com.fiap.bluePoint

### 3. Executar o arquivo bluePointApplication.Java
O projeto estará fluindo a partir dai!


** Verificar a [Explicação Classes](documentacao/ExplicacaoClasses.md)

[video do funcionamento do projeto java](https://www.youtube.com/watch?v=nW9KG-lyNZM)

[video do funcionamento do projeto java 2](https://www.youtube.com/watch?v=FpqfzviS82A)

Agora basta entrar na aplicação de mobile e fazer com que rode de forma web
assim , a aplicação estará pronta para os demais testes descritos.


<a id="_DockerCompose"></a>

# 4 - Docker Compose

[Vídeo do funcionamento do docker compose](https://www.youtube.com/watch?v=wRxSx0cyd58)

Para rodar o projeto Java em docker compose:

### 1. Entre no diretório do projeto clonado
`cd C:\BluePointsProject\BluePoints_Java`

### 2. Iniciae os Contêineres em segundo plano
`docker-compose up --build -d`

### 3. Verifique os Contêineres em Execução
`docker-compose ps`

### 4. Caso queira parar os Contêineres
`docker-compose down`

### 6. Caso queira limpar seu sistema Docker
`docker system prune -a -f --volume`

# 5 - Mobile

### Pré-requisitos

* **Node.js e npm (ou yarn) instalados:** 

1. **Navegue até o diretório do projeto:**
 `cd C:\BluePointsProject\BluePoints_Mobile`
  
 
2. **Instale o npx:**
 `npm install`   

3. **Inicie o projeto:**
`npx expo start`

** Verificar a [API](documentacao/API.md)

# 5 - IA
1. **Baixe o arquivo [BluePoints_IA.py](BluePoints_IA/BluePoints_IA.py)**
2. **Abra o [Google Colab](https://colab.google)**
3.  **Carregue o Arquivo**
4.  **Carregue uma imagem de resíduo com nome '1.png'**

<a id="_Endpoint"></a>

# 6 -  Endpoints

[LINK SWAGGER](http://localhost/swagger-ui/index.html)

Para melhor vizualização dos endpoins, recomendamos inicializar o projeto e posteriormente entrar no link acima
