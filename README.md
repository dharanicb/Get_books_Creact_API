# Get_books_Creact_API

### API 1

#### Path: `/api/books/`

#### Method: `GET`

#### Description:

Returns a list of all players in the team

```
[
  {
    "id": 1,
    "title": "Book 1",
    "author": "Author 1",
  },

  ...
]
```


### API 2

#### Path: `/api/books/:id`

#### Method: `GET`

#### Description:

Returns a list of specific book in the list

```
[
  {
    "id": 1,
    "title": "Book 1",
    "author": "Author 1",
  },

  ...
]
```


### API 3

#### Path: `/api/books/`

#### Method: `POST`

#### Description:

Creates a new book in the team (database). `id` is auto-incremented

#### Request

```
{
  "title": "New Book",
  "author": "New Author"
}
```

#### Response

```
// Book Added to list

{
  "id": 3
  "title": "New Book",
  "author": "New Author"
}
```

### API 4

#### Path: `/api/books/:id`

#### Method: `PUT`

#### Description:

Updates the details of a player in the team (database) based on the player ID

#### Request

```
{
  "title": "Updated Book",
  "author": "Updated Author"
}
```

#### Response

Book Details Updated

```
{
  "id" : 1,
  "title": "Updated Book",
  "author": "Updated Author"
}

```

### API 5

#### Path: `/api/books/:id`

#### Method: `DELETE`

#### Description:

Deletes a player from the team (database) based on the player ID

#### Response

```
Book Removed
```

<br/>

Use `npm install` to install the packages.

**Export the express instance using the default export syntax.**
