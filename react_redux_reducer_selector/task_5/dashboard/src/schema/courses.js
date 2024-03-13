import {schema, normalize} from 'normalizr';


const course = new schema.Entity('courses');
const courseListSchema = [course];

export const coursesNormalizer = (data) => {
    const normalizedData = normalize(data, courseListSchema);
    const coursesEntity = normalizedData.entities.courses;
    return coursesEntity;
}

// data structure
/*
const action = {
    type: FETCH_COURSE_SUCCESS,
    data: [
      {id: 1, name: "ES6", credit: 60},
      {id: 2, name: "Webpack", credit: 20},
      {id: 3, name: "React", credit: 40}
    ]
  }

console.log(coursesNormalizer(data));
{
  1: {id: 1, name: "ES6", credit: 60},
  2: {id: 2, name: "Webpack", credit: 20},
  3: {id: 3, name: "React", credit: 40}
}

*/
