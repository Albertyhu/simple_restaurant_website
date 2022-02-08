export function Wine() {

    const menu = document.createElement('table');
    menu.setAttribute('id', 'wine');

    menu.innerHTML = "<tr><th colspan ='7' class = 'col1'>Wine</th><th class = 'glass' >Glass</th><th>Bottle</th></tr>" +
        "<tr><td colspan ='7' class = 'col1'>2010 Yangarra E High Sands Grenache</td><td class = 'glass'>5</td><td>25</td></tr>" +
        "<tr><td colspan ='7' class = 'col1'>TeWahi Pinot Noir 2014</td><td class = 'glass'>5</td><td>25</td></tr>" +
        "<tr><td colspan ='7' class = 'col1'>Adelsheim Chardonnay 2014</td><td class = 'glass'>5</td><td>24.50</td></tr>" +
        "<tr><td colspan ='7' class = 'col1'>AchavelFerrerFinca Altamira 2013</td><td class = 'glass'>5</td><td>30</td></tr>" +
        "<tr><td colspan ='7' class = 'col1'>Catena Alta Chardonnay</td><td class = 'glass'>5</td><td>53</td></tr>" +
        "<tr><td></td></tr>" + 
        "<tr class = 'appetizers' class = 'col1'><th  colspan = '7'>Appetizers</th><th></th></tr>" +
        "<tr><td colspan ='7' >Prosciutto and Figs</td><td></td><td>23</td></tr>" +
        "<tr><td colspan ='7'>Escargot </td><td></td><td>25</td></tr>" +
        "<tr><td colspan = '7'>Carpaccio of Diver Scallop</td><td></td><td>31</td></tr>" +
        "<tr><td colspan = '7'>Oyster Spheres </td><td></td><td>26</td></tr>" +
        "<tr><td colspan = '7'>Baked brie</td><td></td><td>15</td></tr>" +
        "<tr><td></td></tr>" +
        "<tr class = 'mains'><th  colspan = '4'>Mains</th><th></th></tr>" +
        "<tr><td colspan = '7'>Beef Wellington</td><td></td><td>23</td></tr>" +
        "<tr><td colspan = '7'>Lamb Ravioli with Butter and Sage  </td><td></td><td>25</td></tr>" +
        "<tr><td colspan = '7'>New Zealand Rack of Lamb</td><td></td><td>31</td></tr>" +
        "<tr><td colspan = '7'>Traditional Pasta Carbonara</td><td></td><td>26</td></tr>" +
        "<tr><td colspan = '7'>Spaghetti with Clams, the original recipe</td><td></td><td>15</td></tr>" +
        "<tr><td colspan = '7'>Mediterranean Chickpea Salad</td><td></td><td>15</td></tr>" + 
        "<tr><td></td></tr>" +
        "<tr class = 'specials'><th  colspan = '7'>Chef\'s Special </th><th></th></tr>" +
        "<tr><td colspan = '7'>Kricket's Goose Vindaloo</td><td></td><td>23</td></tr>" +
        "<tr><td colspan = '7'>Filet Mignon in Mushroom Wine Sauce</td><td></td><td>25</td></tr>" +
        "<tr><td></td></tr>" +
        "<tr class = 'dessert'><th  colspan = '7'>Dessert </th><th></th></tr>" +
        "<tr><td colspan = '7'>Strudel </td><td></td><td>23</td></tr>" +
        "<tr><td colspan = '7'>Belgian Chocolate Mousse Cake</td><td></td><td>25</td></tr>" +
        "<tr><td colspan = '7'>Pumpkin Spice Cream Pie</td><td></td><td>25</td></tr>"; 

    return menu; 
}

