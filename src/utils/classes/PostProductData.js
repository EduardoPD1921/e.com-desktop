import api from '../../api';

class PostProductData {
  constructor(data) {
    const { title, description, price, tags, image } = data;
    this.title = title;
    this.description = description;
    this.price = price;
    this.tags = tags;
    this.image = image;
  };

  postData() {
    return new Promise((resolve, reject) => {
      const data = new FormData();
      data.append('title', this.title);
      data.append('description', this.description);
      data.append('price', this.price);
      data.append('tags', this.tags);
      data.append('image', this.image);

      api.post('/product/store', data)
        .then(resp => resolve(resp))
        .catch(error => reject(error));
    });
  };
};

export default PostProductData;