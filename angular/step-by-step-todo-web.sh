# Instalar Angular CLI globalmente na versão do Angular 20
npm install -g @angular/cli@19

# Criar o projeto
npx @angular/cli@19 new todo-web --routing --style=scss --skip-git --skip-tests --standalone --package-manager=npm
cd todo-web

# Adicionar Angular Material
ng add @angular/material

cd /src/app

ng generate component todo-list
ng generate component todo-list/item