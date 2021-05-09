# Caesar-cipher-CLI-tool
This is a command line application. It encrypts and decrypts text with [Caesar's cipher](https://en.wikipedia.org/wiki/Caesar_cipher).
The application work with only letters of the Latin alphabet (lower and upper cases). All other characters, including letters from alphabet of other languages, numbers, punctuation marks, ets. remain unchanged.

## How to install

To install this application, you must perform the following steps:
1. Download it from this repository.
2. Run the command line and go to the application folder.
3. Enter the command "npm install" or "npm i" and wait for the dependency intallation.
4. Application is ready to go.

## How to use

After installation completed to start the apllication in the folder with the apllication enter ih the command line "node caesar [options]".
CLI tool has 4 options (command line parammeters, short alias and full name):

* -s, --shift: a shift
* -i, --input: an input file
* -o, --output: an output file
* -a, --action: an action encode/decode

The **action** option can take the value of **encode** and **decode** and indicates what needs to be done with the incoming text: **encrypt** or **decrypt**.

The **shift** option must be a number (positive or negative). It denotes a **shift** of letters for encryption and decryption.

**Action** and **sfift** options are **required**. If one of them absent, there will be an **error**.

**Input** and **output** options must be relative or absolute path to file or even filenmae if file is in apllication root folder.
**input** is the path to the file from which the text is read.
**output** is the path to the file where the text will be written.

If the file on any of the paths **doesn`t exist** or the path is **incorrrect**, where will be an **error**.

If the **input** and/or **output** options are absent, then **reading** and/or **writting** will be carried out from/to the **command line**.
To **interrupt** the process, in this case, press **Ctrl+C**.

## Usage example

**Usage example:**  
1. _-a (--action)_ is **encode**

```bash
$ node caesar -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

```bash
$ node caesar --action encode --shift 7 --input plain.txt --output encoded.txt
```
> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_ is **decode**  
_Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ node caesar --action decode --shift 7 --input encoded.txt --output plain.txt
```

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> plain.txt
> `This is secret. Message about "_" symbol!`

3. _(Optional) Negative shift handling_

```bash
$ node caesar --action encode --shift -1 --input plain.txt --output encoded.txt
```

> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`
 

