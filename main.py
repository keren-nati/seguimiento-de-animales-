def on_received_number(receivedNumber):
    if input.acceleration(Dimension.X) < -500 and input.acceleration(Dimension.Y) < -500:
        basic.show_leds("""
            # # # # #
                        # # # # .
                        # # # . .
                        # # . # .
                        # . . . #
        """)
    elif input.acceleration(Dimension.X) >= 500 and input.acceleration(Dimension.Y) >= 500:
        basic.show_leds("""
            # . . . #
                        . # . # #
                        . . # # #
                        . # # # #
                        # # # # #
        """)
    elif input.acceleration(Dimension.X) >= 500 and input.acceleration(Dimension.Y) < -500:
        basic.show_leds("""
            # # # # #
                        . # # # #
                        . . # # #
                        . # . # #
                        # . . . #
        """)
    elif input.acceleration(Dimension.X) < -500 and input.acceleration(Dimension.Y) >= 500:
        basic.show_leds("""
            # . . . #
                        # # . # .
                        # # # . .
                        # # # # .
                        # # # # #
        """)
    elif input.acceleration(Dimension.Y) < -900:
        basic.show_leds("""
            . . # . .
                        . # # # .
                        # # # # #
                        . . # . .
                        . . # . .
        """)
    elif input.acceleration(Dimension.Y) >= 400:
        basic.show_leds("""
            . . # . .
                        . . # . .
                        # # # # #
                        . # # # .
                        . . # . .
        """)
    elif input.acceleration(Dimension.X) >= 1:
        basic.show_leds("""
            . . # . .
                        . . # # .
                        # # # # #
                        . . # # .
                        . . # . .
        """)
    elif input.acceleration(Dimension.X) < 1:
        basic.show_leds("""
            . . # . .
                        . # # . .
                        # # # # #
                        . # # . .
                        . . # . .
        """)
    else:
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
        """)
radio.on_received_number(on_received_number)

radio.set_group(43)

def on_forever():
    radio.send_value("ace_x", input.acceleration(Dimension.X))
basic.forever(on_forever)

def on_forever2():
    radio.send_value("ace_x", input.acceleration(Dimension.Y))
basic.forever(on_forever2)
