## This is a Ren'Py visual novel game intro with parallax scrolling
## Save this as script.rpy in your Ren'Py game folder

# Define the game

## MOSS GUY CHARACTER##
#images
image mossguy normal = "gui/mossguy/mossguy_normal.png"
#definition
define mossguy = Character("Moss Guy", 
    color="#c8ffc8",
    image="mossguy",
    namebox_background=Frame("gui/namebox_mossguy.png"))

## STELLERS JAY CHARACTER##
#images
image stellersjay normal = "gui/stellersjay/stellersjay_normal.png"
#definition
define stellersjay = Character("Steller's Jay", 
    color="#64b4ff",
    namebox_background=Frame("gui/namebox_stellersjay.png"))

# Define player name variable
default player_name = ""

# Parallax transform definitions with auto-scaling
transform parallax_bg:
    fit "cover"
    xpan 0
    linear 20.0 xpan 100
    repeat

transform parallax_far:
    fit "cover"
    xpan 0
    linear 15.0 xpan 100
    repeat


transform parallax_mid:
    fit "cover"
    xpan 0
    linear 10.0 xpan 100
    repeat

transform parallax_fg:
    fit "cover"
    xpan 0
    linear 7.0 xpan 100
    repeat

# Title screen will use main_menu label automatically
label main_menu:
    return

# After clicking "Start" on title screen
label start:
    jump intro_cutscene

# Intro cutscene
label intro_cutscene:
    scene black with fade
    
    mossguy "..."
    mossguy "..."
    show mossguy normal at left
    mossguy normal "We did it..."
    
    # Sky scene with parallax
    scene sky_bg at parallax_bg
    show sky_far at parallax_far
    show sky_mid at parallax_mid
    show sky_fg at parallax_fg
    with dissolve
    
    show mossguy normal at left
    mossguy "We've won the war against the Meadow folk..."
    hide mossguy normal
    show stellersjay normal at right
    stellersjay "It's been a long and hard fought battle, but we've finally won thanks to your prowess."
    
    scene black with fade
    show stellersjay normal at right
    stellersjay "We've decided you shall be the new high ruler of the forest folk."
    hide stellersjay normal
    show mossguy normal at left
    mossguy "But first... you must pick a new name to stamp your legacy on this new era..."
    mossguy "...Dont question it, its the custom of the forest folk."
    
    jump name_input

# Name selection screen
label name_input:
    # Room scene with parallax
    scene room_bg at parallax_bg
    show room_far at parallax_far
    show room_mid at parallax_mid
    show room_fg at parallax_fg
    with fade
    
    show mossguy normal at left
    mossguy "Your first decree... what should we call you from this moment on?"
    
    python:
        player_name = renpy.input("Enter your name:", default="Regent Decay", length=20)
        player_name = player_name.strip()
        
        if not player_name:
            player_name = "Regent Decay"
    
    mossguy "Ah, [player_name]... the scrolls will carry your name through the ages.."

# Start of the actual game
label game_start:
    scene room_bg at parallax_bg
    show room_far at parallax_far
    show room_mid at parallax_mid
    show room_fg at parallax_fg
    with fade
    show mossguy normal at left
    define player = Character("[player_name]", color="#4ecdc4")
    
    label intro_conversation:
    mossguy "[player_name], how do you feel about your newfound responsibility?"

    hide mossguy normal
    menu:
        "Honestly, I'm not sure I'm ready for this.":
            show mossguy normal at left
            mossguy "Reluctant leaders are often the ones best suited for the job."
        
        "Its about time I was offered the respect I deserve.":
            show mossguy normal at left
            mossguy "Oh... well yes... Ok. Glad to hear you are ready to go I guess."
        
        "I'm honored to serve the forest folk.":
            show mossguy normal at left
            mossguy "Oh, [player_name]... I knew you would be the one to lead us to greatness."
        
        "Buckle up, I've got a lot of ideas.":
            show mossguy normal at left
            mossguy "Excellent. We are ready to build a new era of greatness."
    
    # Story continues for all choices
    mossguy "Very good. Now, let's move on..."
    
    mossguy "All hail [player_name]!"
    
    # Continue your game from here
    
    return


# Image definitions
# Title screen layers (shown automatically by Ren'Py)
image title_bg = "gui/sky_bg.png"
image title_far = "gui/sky_far.png"
image title_mid = "gui/sky_mid.png"
image title_fg = "gui/sky_fg.png"

# Sky scene layers
image sky_bg = "gui/sky_bg.png"
image sky_far = "gui/sky_far.png"
image sky_mid = "gui/sky_mid.png"
image sky_fg = "gui/sky_fg.png"

# Room scene layers
image room_bg = "gui/sky_bg.png"
image room_far = "gui/sky_far.png"
image room_mid = "gui/sky_mid.png"
image room_fg = "gui/sky_fg.png"

# Black screen
image black = Solid("#000000")