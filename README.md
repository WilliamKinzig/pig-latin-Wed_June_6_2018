Specs:
1. Single character vowel word, add way √
input: I
expected output: Iway
2. Single word that starts with a vowel, add way √
input: Elephant
expected output: Elephantway
3. Single word that starts with a consonant, move first consonant, add ay √
input: color
expected output: Iway
4. Single word that starts with multiple consonants, move to end and add ay √
input: stack
expected output: ackstay
5. Special letter combos at the begining of a word i.e. qu √
input: quest
expected output: estquay
6. Special letter combos + other consonants at the start of the word
input: squirt
expected output: irtsquay
7. Words that have Y as the first vowel
input: yellow
expected output: ellowyay
8. Words with Y as the first vowel
input: style
expected output: ylestay
9. Multiple word string (new function for splitting sentences)
input:Hello I am a sentence
expected output: elloHay Iway amway away entencesay
10. Non-alphabetical characters in a string
input: I am 13 and what is this
expected output: Iway amway 13 andway atwhay isway isthay
