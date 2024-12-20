/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import db from '@adonisjs/lucid/services/db'
import hash from '@adonisjs/core/services/hash'

/** 
 * const notes = [
    {id: 1, text: 'erste Notiz'},
    {id:2, text: 'zweite Notiz'}
]
*/
//router.on('/').render('pages/home', { notes} )

router.post('/login', async({request, response, session})=>{
    const author = await db.from('authors')
                           .select('*')
                           .where(
                                {
                                    login: request.input('login')
                                }
                           )
                           .first()
    if(!author){
        return response.redirect('/login')
    }       
    if(!hash.verify(author.password, request.input('password'))){
        return response.redirect('/login')
    }    
    session.put('login', author.login )
    return response.redirect('/')
})


router.get('/login', async({ view })=>{
    return view.render('pages/login')
})
router.get('/new', async()=>{
    return await hash.make('123')
})
router.get('/', async ({view, session, response })=>{
    if(!session.get('login')){
        return response.redirect('login')
    }
    const notes = await db.from('notes').select('*')
    return view.render('pages/home', {  notes })
})

router.post('/newpost', async ({ request, response, session })=>{
    if(!session.get('login')){
        return response.redirect('login')
    }
    const result = await db.table('notes')
                           .insert({
                                text: request.input('text'),
                                author: session.get('login')
                            })
    if(!result){
        return 'Pech'
    }                         
    return response.redirect('/')
})

