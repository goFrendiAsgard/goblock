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
]