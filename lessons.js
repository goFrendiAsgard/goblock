var __LESSONS = [
    // first lesson, Hello world
    {
        'title'         :   'Hello World',
        'description'   :   'Say Hello world !!!',
        'multitarget'   :   false,
        'test'          :   [
                                [[], ['Hello world']],
                            ],
        'lesson'        :   'lessons/hello_world.html',
        'startblock'    :   'lessons/hello_world.xml',
    },
    // second lesson, Love
    {
        'title'         :   'Love',
        'description'   :   'I love U.',
        'multitarget'   :   true,
        'test'          :   [
                                [ ['Rabbit', 'Carrot'], [['Rabbit love Carrot'],['Rabbit','love','Carrot']] ],
                                [ ['Panda', 'Bamboo'], [['Panda love Bamboo'],['Panda','love','Bamboo']] ],
                                [ ['I', 'you'], [['I love you'],['I','love','you']] ],
                            ],
        'lesson'        :   'lessons/love.html',
        'startblock'    :   'lessons/love.xml',
    },
    // third lesson, pokemon
    {
        'title'         :   'Pokemon',
        'description'   :   'Choose your pokemon !!!',
        'multitarget'   :   false,
        'test'          :   [
                                [ ['Red'], ['Charmender'] ],
                                [ ['Blue'], ['Squirtle'] ],
                                [ ['Green'], ['Bulbasur'] ],
                                [ ['Other'], ['Snorlax'] ]
                            ],
        'lesson'        :   'lessons/pokemon.html',
        'startblock'    :   'lessons/pokemon.xml',
    },
    // fourth lesson, rocket launcher
    {
        'title'         :   'Rocket Launcher',
        'description'   :   '3, 2, 1',
        'multitarget'   :   false,
        'test'          :   [
                                [ [5], [5,4,3,2,1,'launch'] ],
                                [ [3], [3,2,1,'launch'] ],
                            ],
        'lesson'        :   'lessons/rocket_launcher.html',
        'startblock'    :   'lessons/rocket_launcher.xml'
    },
]