services="fc-node-app"

dc_dev_run() {
  # Executar containers em modo de desenvolvimento
  docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
}

dc_dev_down() {
  # Parar todos os containers em modo de desenvolvimento
  docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
}

dc_dev_rb() {
  # Reconstruir a imagem  e atualizar o container
  docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build $services
}

dc_build() {
  # Apenas fazer o build da imagem
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml build $services
}

dc_prod_run() {
  # Apenas executar o container em modo de produção
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
}

dc_prod_rb() {
  # Executar containers em modo de produção e forçar o rebuild
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build $services
}

dc_prod_down() {
  # Parar todos os containers em modo de produção
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml down
}

# Executar a função pelo nome
$1