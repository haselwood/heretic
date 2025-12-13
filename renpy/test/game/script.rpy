# Define your characters
define p = Character("Player", color="#c8ffc8")
define e = Character("Emma", color="#c8c8ff")

# Scale backgrounds to screen size and sprites to a consistent size
image bg city = im.Scale("images/bg city.jpg", 1920, 1080)
image bg room = im.Scale("images/bg room.webp", 1920, 1080)

image emma happy = im.FactorScale("images/emma happy.png", 0.6)
image emma sad = im.FactorScale("images/emma sad.png", 0.6)
image emma demon = im.FactorScale(im.MatrixColor("images/emma happy.png", im.matrix.tint(1.0, 0.15, 0.15)), 0.6)

# The game starts here
label start:
    
    scene bg room
    
    "Welcome to my game!"
    
    p "Hello, I'm the player character and really hot and cute."
    
    show emma happy
    
    e "Hi! I'm Emma. Nice to meet you!"
    
    menu:
        "What do you want to say?"
        
        "Nice to meet you too!":
            e "I'm so glad you're here!"
            
        "Who are you?":
            show emma demon with dissolve
            e "I am not what I seem..."
    
    "I'm a demon!"
    
    return