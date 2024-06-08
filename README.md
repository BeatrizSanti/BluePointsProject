# BLUE POINTS 🔵
***Crie oceanos de possibilidades***


<div>
<img align="center" alt="logo1" height=30%  width=30% src="documentacao/diagrama/BluePointsLogo.png" />
<img align="center" alt="logo" height=30%  width=30% src="documentacao/diagrama/BluePointsLogo2.png" />
</div>




Aplicação em desenvolvimento desde 27/05/2024*
### [Link para o GIT](https://github.com/BeatrizSanti/BluePoints.git)



# Sumário

[1 - Integrantes](#_Integrantes)

[2 - Nossa Proposta e Vídeo Pitch](#_NossaProposta)

[3 - Instruções de como rodar a aplicação](#_Instrucoes)

[4 - Docker Compose](#_DockerCompose)

[5 - Diagramas](#_Diagramas)

[6 - Explicações de classes](#_Explicaçõesdeclasses)

[7 - Endpoints](#_Endpoint)


<a id="_Integrantes"></a>

# 1 - Integrantes
    RM: 551401 Turma: 2TDSPF Nome: Ana Luiza Fontes Franco
    RM: 551856 Turma: 2TDSPF Nome: Beatriz Fon Ehnert de Santi
    RM: 552295 Turma: 2TDSPF Nome: Matheus Felipe Camarinha Duarte
    RM: 98672  Turma: 2TDSPF Nome: Mirelly Ribeiro Azevedo
    RM: 99708  Turma: 2TDSPW Nome: Gabriel Francisco Lobo
** Verificar o [txt da equipe](documentacao%2Fequipe.txt) para consultar pontos extras.

<a id="_NossaProposta"></a>

# 2 - Nossa proposta
[Vídeo Picht](https://youtu.be/mFvFRHsU8Xg?si=P_9WpOjzJNJ6lnDd )
<br>
** Verificar o [Documento explicativo](documentacao/BluePoints.pdf)
<br>
Nosso projeto se trata do uso de um aplicativo para pontuar e premiar pessoas que estão auxiliando na recolha de lixo nas praias.
A identificação é feita com uma IA criada em python por nós para distinguir diferentes tipos de lixo e pontuar de maneiras diferentes cada um deles.
Nosso App é criado em React Native e faz consumo de Java e da IA como API. Quanto a .NET faz um site para controle dos prêmios (nome e custo).
Java é responsável por gerênciar o banco de dados. A princípio, nosso aplicativo não fará o controle de premios via banco de dados nem dos locais onde irão ocorrer os eventos.


<a id="_Instrucoes"></a>

# 3 - Instrucoes de como rodar a aplicação
Enrtar em:

src > main > java > br.com.fiap.bluePoint
e executar o arquivo bluePointApplication.Java
O projeto estará fluindo a partir dai!

[video do funcionamento do projeto java](https://www.youtube.com/watch?v=nW9KG-lyNZM)

[video do funcionamento do projeto java 2](https://www.youtube.com/watch?v=FpqfzviS82A)

Agora basta entrar na aplicação de mobile e fazer com que rode de forma web
assim que rodar de forma web, a aplicação estará pronta para os demias testes
descritos no repositório de [Mobile]()




<a id="_DockerCompose"></a>

# 4 - Docker Compose

[Vídeo do funcionamento do docker compose](https://www.youtube.com/watch?v=wRxSx0cyd58)

## Pré-requisitos

Antes de começar, você precisará ter o seguinte software instalado no seu computador:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

Para rodar o projeto em docker compose:
### 1. Clone o Repositório
`git clone https://github.com/BeatrizSanti/BluePoints.git`

### 2. Entre no diretório do projeto clonado
`cd C:\BluePoints`

### 3. Iniciae os Contêineres em segundo plano
`docker-compose up --build -d`

### 4. Verifique os Contêineres em Execução
`docker-compose ps`

### 5. Pare os Contêineres
`docker-compose down`

### 6. Limpe seu sistema Docker
`docker system prune -a -f --volume`






<a id="_Diagramas"></a>

# 5 - Diagramas

## Diagrama do projeto Java

![diagrama1.jpg](documentacao%2Fdiagrama%2Fdiagrama-bluepoints.png)

## Diagrama de classe
![diagrama2.jpg](documentacao%2Fdiagrama%2Fdiagrama-de-classe.png)

## Modelo MER
![diagrama3.jpg](documentacao%2Fdiagrama%2Fmodelo-MER.png)

## TOGAF
![diagrama4.jpg](documentacao%2Fdiagrama%2FTOGAF.jpg)


<a id="_Explicaçõesdeclasses"></a>


# 6 - Explicações de classes
## 6.1. [Foto](src%2Fmain%2Fjava%2Fbr%2Fcom%2Ffiap%2Fbluepoints%2Fdomain%2Fentity%2FFoto.java)
Classe responsável por armazenar o camimho src de toda imagem passada a Java.

### src
camimnho onde a imagem desejada se encontra.



## 6.2. [Pessoa](src%2Fmain%2Fjava%2Fbr%2Fcom%2Ffiap%2Fbluepoints%2Fdomain%2Fentity%2FPessoa.java)
Classe responsável por armazenar os aspetos das pessoas que utilizarão nosso aplicativo

### Nome
Aqui são armazenados o primeiro nome da pessoa

### sobrenome
Aqui são armazenados o primeiro nome da pessoa

### Pontos
A quantidade de pontos que a pessoa tem armazenado.



## 6.3. [Usuario](src%2Fmain%2Fjava%2Fbr%2Fcom%2Ffiap%2Fbluepoints%2Fdomain%2Fentity%2FUsuario.java)
### Email
Deve ser unico e composto no formato padrão de emails (desc@dominio.com). Esta classse conta com um UK para evitar de ter um mesmo email para mais de um usuário.

### Senha
Regras de caracterização da senha ainda serão definidas.

### Pessoa
Herdará os atributos cadastrados de uma pessoa. Nesta classe, existe uma UK responsável por tornar o atributo único, desta forma, não podendo se repetir uma mesma pessoa. 



## 6.4. [Reciclagem](src%2Fmain%2Fjava%2Fbr%2Fcom%2Ffiap%2Fbluepoints%2Fdomain%2Fentity%2FReciclagem.java)

### Momento
Momento em que a reciclagem foi adicionada ao banco.

### Usuario
O usuário que adicionou ela ao sistema será anexado a ela

### Pontos
Inicialmente valendo nenhum ponto até que a analise por IA defina que valhe algum ponto.

### validado
Define se uma reciclagem já foi ou não avaliada e pontuada pela IA.

### Foto
A Foto que foi enviada da reciclagem e que será analisada posteriormente.



# FUTURAS IMPLEMENTAÇÕES
## Premios
### Nome
O nome ou descrição do premio

### custo
O custo em pontos de quanto será o premio



## Campanha
Aqui ficam os dados de onde será a e quando será a próxima campanha. Furutamente, todas as reciclagens terão como atributo adicional esta classe.

### Endereço
Endeeço aproximado de onde ocorrerá o evento

### Data de início
Data de início do evento

### Data do encerramento
Data do encerramento do evento


<a id="_Endpoint"></a>

# 7 -  Endpoints

[LINK SWAGGER](http://localhost/swagger-ui/index.html)

Para melhor vizualização dos endpoins, recomendamos inicializar o projeto e posteriormente entrar no link acima
