/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'


const notes = [
    {id: 1, text: 'erste Notiz'},
    {id:2, text: 'zweite Notiz'}
]

//router.on('/').render('pages/home', { notes} )
router.get('/', async ({view })=>{
    return view.render('pages/home', {  notes })
})