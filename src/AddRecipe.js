import React, { useState } from 'react';
import axios from 'axios';

function AddRecipe() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [recipeInfo, setRecipeInfo] = useState({
    description: '',
    imageUrl: ''
  });

  const handleAddRecipe = async () => {
    try {
      await axios.post('https://git-backend-zw8i.onrender.com/routes/recipeRoutes', {
        name,
        ingredients
      });
      setName('');
      setIngredients('');
      alert('Recipe added successfully');
    } catch (error) {
      console.error('Error adding recipe', error);
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    let description = '';
    let imageUrl = '';

    switch (term) {
      case 'idly':
        description = `**Idly Recipe:**

Idly is a type of savory rice cake popular in South India. It is steamed and made from a fermented batter of rice and urad dal (black gram).

**Ingredients:**
- 1 cup urad dal (black gram)
- 2 cups rice
- 1/2 teaspoon fenugreek seeds
- Salt to taste
- Water

**Instructions:**
1. Soak urad dal and rice separately in water for 6-8 hours or overnight.
2. Grind the urad dal and fenugreek seeds into a smooth batter.
3. Grind the rice into a slightly coarse batter.
4. Mix both batters together, add salt, and let the mixture ferment for 8-12 hours.
5. Grease idly molds and pour the batter into them.
6. Steam the idlies for about 10-15 minutes until they are cooked through.
7. Serve hot with coconut chutney and sambar.`;
        imageUrl = 'https://st4.depositphotos.com/19960896/31275/i/450/depositphotos_312752040-stock-photo-idli-sambhar-idly-sambar-popular.jpg';
        break;

      case 'dosa':
        description = `**Dosa Recipe:**

Dosa is a thin, crispy pancake made from a fermented batter of rice and urad dal. It is a staple in South Indian cuisine and can be enjoyed with various chutneys and sambar.

**Ingredients:**
- 1 cup urad dal (black gram)
- 2 cups rice
- 1/2 teaspoon fenugreek seeds
- Salt to taste
- Water
- Oil or ghee for cooking

**Instructions:**
1. Soak urad dal, rice, and fenugreek seeds in water for 6-8 hours or overnight.
2. Grind the urad dal into a smooth batter.
3. Grind the rice into a slightly coarse batter and mix with the urad dal batter.
4. Add salt and let the batter ferment for 8-12 hours.
5. Heat a non-stick pan or griddle and lightly grease it with oil or ghee.
6. Pour a ladleful of batter onto the pan and spread it into a thin circle.
7. Cook until the edges turn golden brown and crisp.
8. Flip and cook the other side for a few seconds.
9. Serve hot with coconut chutney and sambar.`;
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLLFCOjSc9TLICJ9myaFU0LPwM3diEelCHg&s';
        break;

      case 'biryani':
        description = `**Biryani Recipe:**

Biryani is a flavorful rice dish made with aromatic spices, basmati rice, and usually meat (such as chicken or lamb) or vegetables. It is popular across the Indian subcontinent.

**Ingredients:**
- 1 kg basmati rice
- 500 grams chicken or lamb, cut into pieces
- 1 large onion, thinly sliced
- 2 tomatoes, chopped
- 1 cup plain yogurt
- 2 tablespoons biryani masala
- 1 teaspoon turmeric powder
- 1 teaspoon red chili powder
- 4 cloves garlic, minced
- 1-inch ginger, minced
- Fresh coriander and mint leaves
- 4 cups water
- Oil or ghee
- Salt to taste

**Instructions:**
1. Wash and soak the basmati rice in water for 30 minutes.
2. Heat oil or ghee in a large pot. Add sliced onions and fry until golden brown.
3. Add minced garlic and ginger, and cook for a minute.
4. Add chopped tomatoes, turmeric powder, red chili powder, and biryani masala. Cook until the tomatoes are soft.
5. Add chicken or lamb pieces and cook until browned.
6. Stir in yogurt and cook until the meat is tender and cooked through.
7. In a separate pot, bring water to a boil, add salt, and cook the soaked rice until 70% done.
8. Layer the partially cooked rice over the meat mixture. Sprinkle with fresh coriander and mint leaves.
9. Cover and cook on low heat for 20-30 minutes, allowing the flavors to meld.
10. Serve hot with raita and salad.`;
        imageUrl = 'https://media.istockphoto.com/id/1333127665/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.jpg?s=612x612&w=0&k=20&c=63UXYPOISm8nJ8SNK79dDm0w1gY6jXzYQP0heL6fnOg=';
        break;

      case 'chapathi':
        description = `**Chapathi Recipe:**

Chapathi, also known as roti, is a type of unleavened flatbread from India. It is made with whole wheat flour and is a staple in Indian households.

**Ingredients:**
- 2 cups whole wheat flour
- 1/2 teaspoon salt
- 1 tablespoon oil or ghee (optional)
- Water (as needed)

**Instructions:**
1. In a large bowl, mix the flour and salt.
2. Gradually add water and knead to form a soft dough.
3. Cover the dough with a damp cloth and let it rest for 30 minutes.
4. Divide the dough into small balls and roll each ball into a thin circle.
5. Heat a griddle or tawa over medium heat.
6. Cook each chapathi for 30 seconds on each side until brown spots appear.
7. Optionally, apply a little oil or ghee on top. Serve hot.`;
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFwYk_W8m7vJPr8-Y4px_RvzjvM1F00DXQA&s';
        break;

      case 'roast':
        description = `**Roast Recipe:**

Roast refers to meat or vegetables that are cooked in the oven until they are browned and crispy. This versatile method can be applied to various ingredients.

**Ingredients:**
- 1 kg meat or vegetables of choice
- 2 tablespoons olive oil
- 1 teaspoon salt
- 1/2 teaspoon black pepper
- 1 teaspoon dried herbs (such as rosemary, thyme, or oregano)

**Instructions:**
1. Preheat your oven to 400°F (200°C).
2. Season the meat or vegetables with olive oil, salt, pepper, and herbs.
3. Place in a roasting pan and cook in the oven for 30-45 minutes, or until the meat is cooked through or vegetables are tender and golden brown.
4. Let it rest for a few minutes before serving.`;
        imageUrl = 'https://www.shutterstock.com/image-photo/homemade-chicken-rotisserie-thyme-lemon-600nw-1574170006.jpg';
        break;

      case 'pongal':
        description = `**Pongal Recipe:**

Pongal is a South Indian dish made with rice and moong dal, often flavored with spices and garnished with nuts and curry leaves. It is commonly enjoyed for breakfast.

**Ingredients:**
- 1 cup rice
- 1/2 cup moong dal
- 1 teaspoon black pepper
- 1 teaspoon cumin seeds
- 1 tablespoon ghee or oil
- 10 cashew nuts
- A few curry leaves
- Salt to taste

**Instructions:**
1. Dry roast the moong dal until golden brown.
2. Wash the rice and dal together in water.
3. In a pot, heat ghee or oil. Add cumin seeds, black pepper, and cashew nuts.
4. Add the rice and dal mixture, and salt. Stir to combine.
5. Add 3 cups of water and cook until the mixture is soft and mushy.
6. Garnish with curry leaves and serve hot.`;
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAHz93lpKXM8t0ImxV9PT7t64r25kUNnQztQ&s';
        break;

      case 'vada':
        description = `**Vada Recipe:**

Vada is a popular South Indian snack made from lentil or chickpea flour. It is deep-fried to a crispy texture and is often enjoyed with chutney or sambar.

**Ingredients:**
- 1 cup urad dal (black gram)
- 1 green chili, finely chopped
- 1 teaspoon ginger, grated
- A few curry leaves
- Salt to taste
- Oil for deep frying

**Instructions:**
1. Soak the urad dal in water for 4-5 hours.
2. Grind the soaked dal into a smooth batter, adding minimal water.
3. Mix in the chopped chili, ginger, curry leaves, and salt.
4. Heat oil in a deep frying pan.
5. Drop spoonfuls of the batter into the hot oil and fry until golden brown and crispy.
6. Drain on paper towels and serve hot.`;
        imageUrl = 'https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2015/04/Medu-Vada-H2.jpg?fit=600%2C900&ssl=1';
        break;

      case 'fish curry':
        description = `**Fish Curry Recipe:**

Fish curry is a flavorful dish made by simmering fish in a spicy and tangy sauce. It is popular in coastal regions of India and is best enjoyed with steamed rice.

**Ingredients:**
- 500 grams fish fillets
- 2 onions, finely chopped
- 2 tomatoes, chopped
- 2 tablespoons oil
- 1 teaspoon turmeric powder
- 1 teaspoon red chili powder
- 1 teaspoon coriander powder
- 1 teaspoon cumin seeds
- 1 tablespoon tamarind paste
- 1 cup coconut milk
- Fresh coriander leaves for garnish
- Salt to taste

**Instructions:**
1. Heat oil in a pan. Add cumin seeds and chopped onions, and sauté until golden brown.
2. Add chopped tomatoes, turmeric powder, red chili powder, and coriander powder. Cook until the tomatoes are soft and the oil separates.
3. Add the fish fillets, tamarind paste, and coconut milk. Stir gently to combine.
4. Cook on low heat for 10-15 minutes until the fish is cooked through and the sauce thickens.
5. Garnish with fresh coriander leaves and serve hot with rice.`;
        imageUrl = 'https://www.shutterstock.com/image-photo/spicy-hot-kerala-meen-kulambu-260nw-611316911.jpg';
        break;

      case 'chilly chicken':
        description = `**Chilly Chicken Recipe:**

Chilly Chicken is a popular Indo-Chinese dish made with battered and fried chicken pieces tossed in a spicy sauce with peppers and onions. It can be served as an appetizer or main course.

**Ingredients:**
- 500 grams boneless chicken, cut into bite-sized pieces
- 2 tablespoons cornflour
- 2 tablespoons all-purpose flour
- 1 egg
- 1 tablespoon soy sauce
- 1 tablespoon chili sauce
- 1 green bell pepper, sliced
- 1 onion, sliced
- 2 green chilies, sliced
- 2 tablespoons oil
- Salt and pepper to taste

**Instructions:**
1. In a bowl, mix the chicken pieces with cornflour, all-purpose flour, egg, soy sauce, and a pinch of salt. Let it marinate for 30 minutes.
2. Heat oil in a frying pan. Fry the marinated chicken pieces until golden brown. Remove and set aside.
3. In the same pan, add sliced onions, green bell pepper, and green chilies. Sauté for a few minutes.
4. Add the fried chicken pieces back to the pan along with chili sauce and soy sauce. Toss everything together until well coated.
5. Cook for another 2-3 minutes and serve hot as an appetizer or with fried rice.`;
        imageUrl = 'https://png.pngtree.com/thumb_back/fw800/background/20240109/pngtree-indian-chilli-chicken-dry-served-in-a-plate-over-moody-background-image_15609001.jpg';
        break;

      default:
        break;
    }

    setSearchTerm(term);
    setRecipeInfo({
      description,
      imageUrl
    });
  };

  const styles = {
    container: {
      display: 'flex',
      backgroundImage: searchTerm ? 'none' : 'url(https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg)',
      backgroundSize: 'cover',
      padding: '20px',
    },
    sidebar: {
      width: '200px',
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderRadius: '8px',
      marginRight: '20px',
      position: 'fixed',
      left: '0',
      top: '0',
      height: '100%',
      overflowY: 'auto',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    },
    sidebarItem: {
      marginBottom: '10px',
      padding: '10px',
      backgroundColor: '#e0e0e0',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    sidebarItemHover: {
      backgroundColor: 'red',
    },
    mainContent: {
      flexGrow: '1',
      marginLeft: '220px', // To account for the fixed sidebar
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      minHeight: '80vh', // To ensure scrolling
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    form: {
      marginBottom: '30px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
    recipeContainer: {
      display: searchTerm ? 'block' : 'none',
      marginTop: '20px',
    },
    recipeImage: {
      maxWidth: '100%',
      borderRadius: '8px',
    },
    recipeDescription: {
      marginTop: '10px',
      whiteSpace: 'pre-wrap',
      lineHeight: '1.6',
      color: '#444',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2>Recipe Categories</h2>
        <div style={styles.sidebarItem} onClick={() => handleSearch({ target: { value: 'idly' } })}>Idly</div>
        <div style={styles.sidebarItem} onClick={() => handleSearch({ target: { value: 'dosa' } })}>Dosa</div>
        <div style={styles.sidebarItem} onClick={() => handleSearch({ target: { value: 'biryani' } })}>Biryani</div>
        <div style={styles.sidebarItem} onClick={() => handleSearch({ target: { value: 'chapathi' } })}>Chapathi</div>
        <div style={styles.sidebarItem} onClick={() => handleSearch({ target: { value: 'roast' } })}>Roast</div>
        <div style={styles.sidebarItem} onClick={() => handleSearch({ target: { value: 'pongal' } })}>Pongal</div>
        <div style={styles.sidebarItem} onClick={() => handleSearch({ target: { value: 'vada' } })}>Vada</div>
        <div style={styles.sidebarItem} onClick={() => handleSearch({ target: { value: 'fish curry' } })}>Fish Curry</div>
        <div style={styles.sidebarItem} onClick={() => handleSearch({ target: { value: 'chilly chicken' } })}>Chilly Chicken</div>
      </div>

      <div style={styles.mainContent}>
        <h2 style={styles.header}>Add a New Recipe</h2>
        <div style={styles.form}>
          <input
            type="text"
            style={styles.input}
            placeholder="Recipe Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            style={styles.input}
            placeholder="Ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <button style={styles.button} onClick={handleAddRecipe}>
            Add Recipe
          </button>
        </div>

        {searchTerm && (
          <div style={styles.recipeContainer}>
            <img
              src={recipeInfo.imageUrl}
              alt={searchTerm}
              style={styles.recipeImage}
            />
            <div style={styles.recipeDescription}>
              {recipeInfo.description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddRecipe;
