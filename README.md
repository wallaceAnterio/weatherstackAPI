# WeatherApplic
Essse projeto foi gerado com  [Angular CLI](https://github.com/angular/angular-cli) versão 8.3.12.

## Iniciando servidor
Rode `ng serve`. Navegue para `http://localhost:4200/`. A aplicação ira dar reload automaticamente quando for feito alguma alteração em algum arquivo do source.

## Baixar dependencias
npm install

## Obtendo a região do usuário
Será apresentado ao usuário o formulário [pesquisaClimaRegiao] disponivel no weather.component.html, para que seja informado a região a ser pesquisada.

## Obtendo os dados da API (GET)
Após o usuário informar a região e clicar no botão <Buscar> do formulário, o método getClima(<parametro>) do weather.component.ts será chamado passando como parâmetro a região digitada pelo usuário.

O método getClima(<parametro>), chamará então o getWeather(location) do service (clima.service.ts). Este sendo o responsável por fazer o GET na API "weatherstack".

## Retorno dos dados da API (GET)
Os dados necessário para o GET na API, através da região são:
Chave>: chave privada do usuário após registro no api.weatherstack.com
Query>: Região   

Composto da seguinte forma:
return this.http.get(`http://api.weatherstack.com/current?access_key=${chave}&query=${regiao}`)

O retorno obtido será atribuido ao objeto weatherData do weather.component.ts.

## Exibindo os dados ao usuário
Os dados contidos no objeto weatherData, serão atribuidos em variável locais criadas no weather.component.ts
Os campos exibidos ao usuários, serão preenchidos automaticamento na página weather.component.html. Estes campos serão exibidos com os valores atribuidos a estas variáveis.

Neste projeto, os elementos utilizados da API são. 
Seção Location: (region;name;country;localtime)
Seção Current: (temperature;feelslike;wind_speed;pressure;humidity;cloudcover)

## Lógica de exibição dos ìcones.
Para exibição dos ícones, foi considerado o valor da temperatura em consideração o horário da pesquisa.