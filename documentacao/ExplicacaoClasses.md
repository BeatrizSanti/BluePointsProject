
# Explicações de classes
## 1 [Foto](src%2Fmain%2Fjava%2Fbr%2Fcom%2Ffiap%2Fbluepoints%2Fdomain%2Fentity%2FFoto.java)
Classe responsável por armazenar o camimho src de toda imagem passada a Java.

### src
camimnho onde a imagem desejada se encontra.



## 2 [Pessoa](src%2Fmain%2Fjava%2Fbr%2Fcom%2Ffiap%2Fbluepoints%2Fdomain%2Fentity%2FPessoa.java)
Classe responsável por armazenar os aspetos das pessoas que utilizarão nosso aplicativo

### Nome
Aqui são armazenados o primeiro nome da pessoa

### sobrenome
Aqui são armazenados o primeiro nome da pessoa

### Pontos
A quantidade de pontos que a pessoa tem armazenado.



## 3 [Usuario](src%2Fmain%2Fjava%2Fbr%2Fcom%2Ffiap%2Fbluepoints%2Fdomain%2Fentity%2FUsuario.java)
### Email
Deve ser unico e composto no formato padrão de emails (desc@dominio.com). Esta classse conta com um UK para evitar de ter um mesmo email para mais de um usuário.

### Senha
Regras de caracterização da senha ainda serão definidas.

### Pessoa
Herdará os atributos cadastrados de uma pessoa. Nesta classe, existe uma UK responsável por tornar o atributo único, desta forma, não podendo se repetir uma mesma pessoa. 



## 4 [Reciclagem](src%2Fmain%2Fjava%2Fbr%2Fcom%2Ffiap%2Fbluepoints%2Fdomain%2Fentity%2FReciclagem.java)

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
