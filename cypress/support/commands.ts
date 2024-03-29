import * as article from './commands/article'
import * as comment from './commands/comment'
import * as common from './commands/common'
import * as profile from './commands/profile'
import * as rating from './commands/rating'

Cypress.Commands.addAll(common)
Cypress.Commands.addAll(article)
Cypress.Commands.addAll(comment)
Cypress.Commands.addAll(profile)
Cypress.Commands.addAll(rating)

export {}
