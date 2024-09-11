# Weeks of your life, by @lkjimy

This project is a simple visual representation of the weeks of your life, represented as a grid of squares.

Each square represents a week of your life, and the color of the square represents how many weeks have passed since the week represented by that square.

The project uses Vue.js and is fully responsive.

You can see it in action [here](https://lkjimy.github.io/weeks-of-your-life-by-lkjimy/).

## How to use

Just open the URL with the query parameters properly placed, in any order you like. Example:

`https://lkjimy.github.io/weeks-of-your-life-by-lkjimy/`?d=`$day`&m=`$month`&y=`$year`&backgroundColor=`$backgroundColor`&borderColor=`$borderColor`&fillColor=`$fillColor`&birthdayColor=`$birthdayColor`

Check the params for the query on the following table.

## Query Parameters

| Param           | Default     | Description                                                                                                                                                                         |
| --------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| d               | -           | The day of the month.                                                                                                                                                               |
| m               | -           | The month of the year.                                                                                                                                                              |
| y               | ----        | The year to start counting from.                                                                                                                                                    |
| backgroundColor | white       | The color of the background. Can be css named color or HEX with the `#` escaped and encoded. `#FFF` becomes `%23FFF`.                                                               |
| borderColor     | black       | The color of the border. Can be css named color (cyan, red, green, black, white...) or HEX with the `#` escaped and encoded. `#FFF` becomes `%23FFF`.                               |
| fillColor       | black       | The color of the filled squares. Can be css named color (cyan, red, green, black, white...) or HEX with the `#` escaped and encoded. `#FFF` becomes `%23FFF`.                       |
| birthdayColor   | forestgreen | The color of the square representing the current week. Can be css named color (cyan, red, green, black, white...) or HEX with the `#` escaped and encoded. `#FFF` becomes `%23FFF`. |

## License

This project is licensed under the MIT license. See [LICENSE](LICENSE) for more information.
