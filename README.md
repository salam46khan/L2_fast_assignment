#  What are some differences between interfaces and types in TypeScript?

In typeScript Interface and type are used to define object stacture. But there are some differences.

**Interface:** Interface is a way to define the structure of an object, that explain what properties and methods an object should have. and It use for non-primitive data types.

**Type:** type is a keyword in TypeScript that allows you to create your own custom type alias — that is, a name for a specific data structure or value set. and it used for primitive data type.

### Type vs Interface: 
- type used for any type besically primitive and Interface used for object
- Type are extend with intersection (&), and interface extend with using extends keyword
- type suppord function definition and interface not


# What is the use of the keyof keyword in TypeScript? Provide an example.

keyof is a TypeScript operator. It takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as type P = "x" | "y"

### why use keyof?
- To extract all keys of a type.
- To ensure type-safe access
- Commonly used with generics

when we use string litarel like this: 

type user = "windows" | "mac"

we can aslo do this with using keyof operator, we need a type, like:

type User = {
	window: string;
	mac: string
}

and we use like:
type ProUser = keyof User;

and we get ("windows" | "mac")

then we can use:
co
