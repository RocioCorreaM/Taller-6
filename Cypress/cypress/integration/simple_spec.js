describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
    })
})

describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
		   cy.screenshot()
     })
})

describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
      cy.screenshot()
    })
})

describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("mimail@example.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("tgte7676765")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
      cy.screenshot()
    })
})

//Login Correcto
describe('Los estudiantes login', function() {
    it('Visits los estudiantes and not fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("rdpcm82@gmail.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.contains('Quieres guardar la contrasena')
      cy.screenshot()
    })
})

//Profesor
// describe('Los estudiantes login', function() {
//     it('Visits los estudiantes and choose a professor', function() {
//       cy.visit('https://losestudiantes.co')
//       cy.contains('Cerrar').click()
//       cy.contains('Busca un profesor o materia...').click({ force: true })
//       //cy.get('input[name="Busca un profesor o materia..."]').type('Victor Manuel Toro Cordoba - Ingeniería De Sistemas',{ force: true })
//       cy.get('[class="Select-control"]').find('input[aria-activedescendant="react-select-required_error_checksum--value"]').click({ force: true }).type("Victor manuel")
//     })
// })
