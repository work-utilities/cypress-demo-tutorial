Testing a react todo app

tutorial https://drive.google.com/drive/u/0/?tab=mo#my-drive


1. clone app: 
git clone git@github.com:cypress-io/cypress-tutorial-build-todo-starter.git

2. install all project dependencies
npm install

3. edit package.json


4. npm run dev

5. for our convinience, add cypress to package.json scripts:
"cypress": "cypress open"

6. now run cypress:
npm run cypress

7. added  autoFocus to input-form-spec.js - now it will focus


8. To run only one it test: it.only()

  it.only('accepts input', () => {
  	cy.visit(hostUrl)
  	cy.get('.new-todo')
  






