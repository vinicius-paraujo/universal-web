# Implantação com Docker

O portal Universal é gerado estaticamente pelo Astro. A imagem utiliza Node.js somente durante a construção e entrega os arquivos resultantes por meio do Nginx.

## Arquitetura da imagem

O `Dockerfile` possui duas etapas:

1. `build`: instala as dependências com `npm ci` e gera o portal em `dist/`;
2. `runtime`: copia somente a saída estática para uma imagem Nginx.

Astro, Node.js, NPM, o código-fonte e as dependências de desenvolvimento não fazem parte da imagem final.

## Requisitos

- Docker com suporte a construções em múltiplas etapas;
- acesso ao registro público de imagens para obter `node:22-alpine` e `nginx:alpine`;
- endereço público definitivo do portal.

## Construção

Execute o comando na raiz do repositório:

```bash
docker build \
  --build-arg SITE_URL=https://universal.markineo.com.br \
  --tag universal-web .
```

Substitua o valor de `SITE_URL` pelo endereço público definitivo na infraestrutura da UFC. O endereço deve incluir o protocolo HTTPS e não deve conter um caminho de arquivo.

Se o argumento for omitido, a construção utiliza `https://universal.markineo.com.br`.

## Execução

A imagem serve o portal pela porta 80:

```bash
docker run --rm --name universal-web --publish 8080:80 universal-web
```

Com esse mapeamento, o portal fica disponível em `http://localhost:8080`.

## Verificação

Após iniciar o container, verifique os seguintes endereços:

- `http://localhost:8080/` — versão em português;
- `http://localhost:8080/en/` — versão em inglês;
- `http://localhost:8080/robots.txt` — diretivas para mecanismos de busca;
- `http://localhost:8080/sitemap-index.xml` — índice do sitemap.

Também é possível verificar diretamente a resposta do servidor:

```bash
curl --fail --head http://localhost:8080/
curl --fail --head http://localhost:8080/en/
```

## URL pública e reconstrução

O valor de `SITE_URL` é aplicado durante a construção aos endereços canônicos, metadados de compartilhamento e sitemap. Como esses arquivos são estáticos, alterar a URL pública exige construir uma nova imagem.

A configuração atual pressupõe que o portal será publicado na raiz de um domínio ou subdomínio, como `https://universal.ufc.br/`. A publicação em um subdiretório, como `https://www.ufc.br/universal/`, exige configurar previamente o caminho-base da aplicação e revisar os caminhos absolutos dos recursos.

## Atualização da imagem

Para publicar uma nova versão:

1. obtenha a revisão desejada do repositório;
2. construa uma nova imagem com a URL pública correta;
3. atribua uma etiqueta de versão definida pela infraestrutura;
4. substitua o container preservando o mapeamento da porta 80.

O portal não utiliza banco de dados, volume persistente ou configuração de execução. Nenhuma credencial deve ser adicionada à imagem.
