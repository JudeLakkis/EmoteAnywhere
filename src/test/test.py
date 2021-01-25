s = "Hello world, this is my string :smile:\n I have found :search: a way to pull emotes :lit: out of strings"

position = 0
emote = ''
emotes = []
for i in s:
    if i == ':' and position == 0:
        position = 1
        continue
    elif i == ':' and position == 1:
        position = 0

    if position == 1:
        emote += i
    elif position == 0:
        if emote != '':
            emotes.append(emote)
            emote = ''
print(emotes)
