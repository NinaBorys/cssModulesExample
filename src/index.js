//npm start
//commad doesn't start the html-page becaue of the node vertion (6.3.1)
//[5.0-6.0 needed for webpack script to work]

import styles from './app.css'

let element = `
  <div class="${styles.element}">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
  </div>
`

document.write(element);
