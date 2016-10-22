import recipes_monday    from './recipes_monday';
import recipes_tuesday   from './recipes_tuesday';
import recipes_wednesday from './recipes_wednesday';
import recipes_thursday  from './recipes_thursday';
import recipes_friday    from './recipes_friday';
import recipes_saturday  from './recipes_saturday';
import recipes_sunday    from './recipes_sunday';

const data = {
    recipes: {
        1 : recipes_monday,
        2 : recipes_tuesday,
        3 : recipes_wednesday,
        4 : recipes_thursday,
        5 : recipes_friday,
        6 : recipes_saturday,
        7 : recipes_sunday
    }
}

export const getById = (id) => {
    const dia = id.toString().slice(0, 1);
    if(parseInt(dia) > 7 || parseInt(dia) < 0) return null;
    return data.recipes[dia].food
        .concat(data.recipes[dia].dinner)
        .find((receta) => receta.id == id);
}

export const getAll = () => {
    return [1, 2, 3, 4, 5, 6, 7].reduce((acum, dia) => {
        return acum.concat(data.recipes[dia].food.concat(data.recipes[dia].dinner))
    }, []);
}

export default data;