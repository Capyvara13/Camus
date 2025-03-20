###### user:

- id int pk a_i nn;
- nick varchar nn un;
- password varchar nn;
- email varchar nn un;
- na int  nn;
//( 
    0 = padrão,
    1 = criador,
    2 = adm;
)
 - follow int nn zf;

###### article:

 - id int pk a_i nn;
 - title varchar nn;
 - text varchar nn;
 - gender varchar nn;
 - abstract varchar nn;
 - author varchar nn sk;
 - creationDate date nn;
 - language varchar nn;
 - likes int nn zf;
 - view int nn zf;

###### comment:

 - id int pk a_i nn;
 - user sk nn;
 - textC  varchar nn;
