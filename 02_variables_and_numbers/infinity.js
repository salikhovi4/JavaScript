Infinity > 100500; // true
-Infinity < -100500; // true
100500 / 0; // Infinity

Infinity === Infinity; // true
Infinity < Infinity; // false
Infinity > Infinity; // false

Infinity >= Infinity; // true
Infinity <= Infinity; // true

Infinity + Infinity; // Infinity
-Infinity - Infinity; // -Infinity

Infinity - Infinity; // NaN
-Infinity + Infinity; // NaN
Infinity / Infinity; // NaN

Infinity / 10; // Infinity
Infinity * 10; // Infinity
Infinity ** 10; // Infinity
Infinity ** Infinity; // Infinity

Infinity ** -Infinity; // 0
(-Infinity) ** Infinity; // Infinity

// Не используйте Infinity без явной необходимости!
// Всё, что делает бесконечность еще более бесконечной = Infinity
// Любые операции с Infinity и числом вернут бесконечность
// Уменьшение Infinity при делении или вычитании не работает в JS
// Две Infinity равны
// Деление на 0 дает Infinity
