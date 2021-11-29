describe("filterObjects", function() {
    it("Возвращает 2 объекта, отфильтрованных по указанному полю (name, 'Иван'); ", function() {
        let objects = [
            { name: 'Василий', surname: 'Васильев' },
            { name: 'Иван', surname: 'Иванов' },
            { name: 'Пётр', surname: 'Петров' },
            { name: 'Иван', surname: 'Сергеев' }
        ];
        let result = [
            { name: 'Иван', surname: 'Иванов' }, 
            { name: 'Иван', surname: 'Сергеев' }
        ]
        assert.deepEqual(filterObjects(objects, "name", "Иван"), result);
      });

      it("Фильтрация пустого массива возвращает пустой массив", function() {
        let objects = [];
        let result = []
        assert.deepEqual(filterObjects(objects, "name", "Иван"), result);
      });

      it("Фильтрация массива без подходящих объектов возвращает пустой массив", function() {
        let objects = [];
        let result = []
        assert.deepEqual(filterObjects(objects, "name", "James"), result);
      });
});