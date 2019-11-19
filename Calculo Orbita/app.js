function prepararMatrix(P) {
    let A = Array.from({ length: 6 }, () => new Array(6).fill(1));
    A.forEach((t, i) => {
        A[i][0] = Math.pow(P[i][0], 2);
        A[i][1] = P[i][0] * P[i][1];
        A[i][2] = Math.pow(P[i][1], 2);
        A[i][3] = P[i][0];
        A[i][4] = P[i][1];
    });
    return A;
}

function gerarEquacaoOrbita(A) {

}

//{{ x^2, x*y, y ^ 2, x, y, 1 },{ a^2, a*b, b ^ 2, a, b, 1 },{ c^2, c*d, d ^ 2, c, d, 1 },{ e^2, e*f, f ^ 2, e, f, 1 },{ g^2, g*h, h ^ 2, g, h, 1 },{ i ^ 2, i*j, j ^ 2, i, j, 1 }}

//{{a, b, c, d, e, 1},{f, g, h, i, j, 1},{k, l, m, n, o, 1},{p, q, r, s, t, 1},{u, v, w, x, y, 1},{z, A, B, C, D, 1}}

let s = "e i m q u - d j m q u - e h n q u + c j n q u + d h o q u - c i o q u - e i l r u + d j l r u + e g n r u - b j n r u - d g o r u + b i o r u + e h l s u - c j l s u - e g m s u + b j m s u + c g o s u - b h o s u - d h l t u + c i l t u + d g m t u - b i m t u - c g n t u + b h n t u - e i m p v + d j m p v + e h n p v - c j n p v - d h o p v + c i o p v + e i k r v - d j k r v - e f n r v + a j n r v + d f o r v - a i o r v - e h k s v + c j k s v + e f m s v - a j m s v - c f o s v + a h o s v + d h k t v - c i k t v - d f m t v + a i m t v + c f n t v - a h n t v + e i l p w - d j l p w - e g n p w + b j n p w + d g o p w - b i o p w - e i k q w + d j k q w + e f n q w - a j n q w - d f o q w + a i o q w + e g k s w - b j k s w - e f l s w + a j l s w + b f o s w - a g o s w - d g k t w + b i k t w + d f l t w - a i l t w - b f n t w + a g n t w - e h l p x + c j l p x + e g m p x - b j m p x - c g o p x + b h o p x + e h k q x - c j k q x - e f m q x + a j m q x + c f o q x - a h o q x - e g k r x + b j k r x + e f l r x - a j l r x - b f o r x + a g o r x + c g k t x - b h k t x - c f l t x + a h l t x + b f m t x - a g m t x - D (d h l p - c i l p - d g m p + b i m p + c g n p - b h n p - d h v p + c i v p + d m v p - i m v p - c n v p + h n v p + d g w p - b i w p - d l w p + i l w p + b n w p - g n w p - c g x p + b h x p + c l x p - h l x p - b m x p + g m x p - d h k q + c i k q + d f m q - a i m q - c f n q + a h n q + d g k r - b i k r - d f l r + a i l r + b f n r - a g n r - c g k s + b h k s + c f l s - a h l s - b f m s + a g m s - d h l u + c i l u + d g m u - b i m u - c g n u + b h n u + d h q u - c i q u - d m q u + i m q u + c n q u - h n q u - d g r u + b i r u + d l r u - i l r u - b n r u + g n r u + c g s u - b h s u - c l s u + h l s u + b m s u - g m s u + d h k v - c i k v - d f m v + a i m v + c f n v - a h n v + d f r v - a i r v - d k r v + i k r v + a n r v - f n r v - c f s v + a h s v + c k s v - h k s v - a m s v + f m s v - d g k w + b i k w + d f l w - a i l w - b f n w + a g n w - d f q w + a i q w + d k q w - i k q w - a n q w + f n q w + b f s w - a g s w - b k s w + g k s w + a l s w - f l s w + c g k x - b h k x - c f l x + a h l x + b f m x - a g m x + c f q x - a h q x - c k q x + h k q x + a m q x - f m q x - b f r x + a g r x + b k r x - g k r x - a l r x + f l r x) + d h l p y - c i l p y - d g m p y + b i m p y + c g n p y - b h n p y - d h k q y + c i k q y + d f m q y - a i m q y - c f n q y + a h n q y + d g k r y - b i k r y - d f l r y + a i l r y + b f n r y - a g n r y - c g k s y + b h k s y + c f l s y - a h l s y - b f m s y + a g m s y + C (e h l p - c j l p - e g m p + b j m p + c g o p - b h o p - e h v p + c j v p + e m v p - j m v p - c o v p + h o v p + e g w p - b j w p - e l w p + j l w p + b o w p - g o w p - c g y p + b h y p + c l y p - h l y p - b m y p + g m y p - e h k q + c j k q + e f m q - a j m q - c f o q + a h o q + e g k r - b j k r - e f l r + a j l r + b f o r - a g o r - c g k t + b h k t + c f l t - a h l t - b f m t + a g m t - e h l u + c j l u + e g m u - b j m u - c g o u + b h o u + e h q u - c j q u - e m q u + j m q u + c o q u - h o q u - e g r u + b j r u + e l r u - j l r u - b o r u + g o r u + c g t u - b h t u - c l t u + h l t u + b m t u - g m t u + e h k v - c j k v - e f m v + a j m v + c f o v - a h o v + e f r v - a j r v - e k r v + j k r v + a o r v - f o r v - c f t v + a h t v + c k t v - h k t v - a m t v + f m t v - e g k w + b j k w + e f l w - a j l w - b f o w + a g o w - e f q w + a j q w + e k q w - j k q w - a o q w + f o q w + b f t w - a g t w - b k t w + g k t w + a l t w - f l t w + c g k y - b h k y - c f l y + a h l y + b f m y - a g m y + c f q y - a h q y - c k q y + h k q y + a m q y - f m q y - b f r y + a g r y + b k r y - g k r y - a l r y + f l r y) - B (e i l p - d j l p - e g n p + b j n p + d g o p - b i o p - e i v p + d j v p + e n v p - j n v p - d o v p + i o v p + e g x p - b j x p - e l x p + j l x p + b o x p - g o x p - d g y p + b i y p + d l y p - i l y p - b n y p + g n y p - e i k q + d j k q + e f n q - a j n q - d f o q + a i o q + e g k s - b j k s - e f l s + a j l s + b f o s - a g o s - d g k t + b i k t + d f l t - a i l t - b f n t + a g n t - e i l u + d j l u + e g n u - b j n u - d g o u + b i o u + e i q u - d j q u - e n q u + j n q u + d o q u - i o q u - e g s u + b j s u + e l s u - j l s u - b o s u + g o s u + d g t u - b i t u - d l t u + i l t u + b n t u - g n t u + e i k v - d j k v - e f n v + a j n v + d f o v - a i o v + e f s v - a j s v - e k s v + j k s v + a o s v - f o s v - d f t v + a i t v + d k t v - i k t v - a n t v + f n t v - e g k x + b j k x + e f l x - a j l x - b f o x + a g o x - e f q x + a j q x + e k q x - j k q x - a o q x + f o q x + b f t x - a g t x - b k t x + g k t x + a l t x - f l t x + d g k y - b i k y - d f l y + a i l y + b f n y - a g n y + d f q y - a i q y - d k q y + i k q y + a n q y - f n q y - b f s y + a g s y + b k s y - g k s y - a l s y + f l s y) + A (e i m p - d j m p - e h n p + c j n p + d h o p - c i o p - e i w p + d j w p + e n w p - j n w p - d o w p + i o w p + e h x p - c j x p - e m x p + j m x p + c o x p - h o x p - d h y p + c i y p + d m y p - i m y p - c n y p + h n y p - e i k r + d j k r + e f n r - a j n r - d f o r + a i o r + e h k s - c j k s - e f m s + a j m s + c f o s - a h o s - d h k t + c i k t + d f m t - a i m t - c f n t + a h n t - e i m u + d j m u + e h n u - c j n u - d h o u + c i o u + e i r u - d j r u - e n r u + j n r u + d o r u - i o r u - e h s u + c j s u + e m s u - j m s u - c o s u + h o s u + d h t u - c i t u - d m t u + i m t u + c n t u - h n t u + e i k w - d j k w - e f n w + a j n w + d f o w - a i o w + e f s w - a j s w - e k s w + j k s w + a o s w - f o s w - d f t w + a i t w + d k t w - i k t w - a n t w + f n t w - e h k x + c j k x + e f m x - a j m x - c f o x + a h o x - e f r x + a j r x + e k r x - j k r x - a o r x + f o r x + c f t x - a h t x - c k t x + h k t x + a m t x - f m t x + d h k y - c i k y - d f m y + a i m y + c f n y - a h n y + d f r y - a i r y - d k r y + i k r y + a n r y - f n r y - c f s y + a h s y + c k s y - h k s y - a m s y + f m s y) - (e i m q - d j m q - e h n q + c j n q + d h o q - c i o q - e i w q + d j w q + e n w q - j n w q - d o w q + i o w q + e h x q - c j x q - e m x q + j m x q + c o x q - h o x q - d h y q + c i y q + d m y q - i m y q - c n y q + h n y q - e i l r + d j l r + e g n r - b j n r - d g o r + b i o r + e h l s - c j l s - e g m s + b j m s + c g o s - b h o s - d h l t + c i l t + d g m t - b i m t - c g n t + b h n t - e i m v + d j m v + e h n v - c j n v - d h o v + c i o v + e i r v - d j r v - e n r v + j n r v + d o r v - i o r v - e h s v + c j s v + e m s v - j m s v - c o s v + h o s v + d h t v - c i t v - d m t v + i m t v + c n t v - h n t v + e i l w - d j l w - e g n w + b j n w + d g o w - b i o w + e g s w - b j s w - e l s w + j l s w + b o s w - g o s w - d g t w + b i t w + d l t w - i l t w - b n t w + g n t w - e h l x + c j l x + e g m x - b j m x - c g o x + b h o x - e g r x + b j r x + e l r x - j l r x - b o r x + g o r x + c g t x - b h t x - c l t x + h l t x + b m t x - g m t x + d h l y - c i l y - d g m y + b i m y + c g n y - b h n y + d g r y - b i r y - d l r y + i l r y + b n r y - g n r y - c g s y + b h s y + c l s y - h l s y - b m s y + g m s y) z"



for (let c = 0; c < s.length - 2; c++) {
    s = s.replace(/[a-zA-Z)][ ][a-zA-Z(]/, (a) => {
        return a[0] + '*' + a[2];
    });
}
/*
let P = [
    [8.025, 8.310],
    [10.170, 6.355],
    [11.202, 3.212],
    [10.736, 0.375],
    [9.092, -2.267]
];
*/
/*
let P = [
    [-1, 10.5],
    [2, 7.5],
    [3, 4.7],
    [2.5, 2.0],
    [0, -1.0]
];
*/
//386.802*Math.pow(x,2)-102.895*x*y+446.029*Math.pow(y,2)-2476.443*x-1427.998*y - 17109.375;


s = s.replace(/[f]/g, "(" + Math.pow(P[0][0], 2).toFixed(3) + ")");
s = s.replace(/[g]/g, "(" + (P[0][0] * P[0][1]).toFixed(3) + ")");
s = s.replace(/[h]/g, "(" + Math.pow(P[0][1], 2).toFixed(3) + ")");
s = s.replace(/[i]/g, "(" + P[0][0].toFixed(3) + ")");
s = s.replace(/[j]/g, "(" + P[0][1].toFixed(3) + ")");

s = s.replace(/[k]/g, "(" + Math.pow(P[1][0], 2).toFixed(3) + ")");
s = s.replace(/[l]/g, "(" + (P[1][0] * P[1][1]).toFixed(3) + ")");
s = s.replace(/[m]/g, "(" + Math.pow(P[1][1], 2).toFixed(3) + ")");
s = s.replace(/[n]/g, "(" + P[1][0].toFixed(3) + ")");
s = s.replace(/[o]/g, "(" + P[1][1].toFixed(3) + ")");

s = s.replace(/[p]/g, "(" + Math.pow(P[2][0], 2).toFixed(3) + ")");
s = s.replace(/[q]/g, "(" + (P[2][0] * P[2][1]).toFixed(3) + ")");
s = s.replace(/[r]/g, "(" + Math.pow(P[2][1], 2).toFixed(3) + ")");
s = s.replace(/[s]/g, "(" + P[2][0].toFixed(3) + ")");
s = s.replace(/[t]/g, "(" + P[2][1].toFixed(3) + ")");

s = s.replace(/[u]/g, "(" + Math.pow(P[3][0], 2).toFixed(3) + ")");
s = s.replace(/[v]/g, "(" + (P[3][0] * P[3][1]).toFixed(3) + ")");
s = s.replace(/[w]/g, "(" + Math.pow(P[3][1], 2).toFixed(3) + ")");
s = s.replace(/[x]/g, "(" + P[3][0].toFixed(3) + ")");
s = s.replace(/[y]/g, "(" + P[3][1].toFixed(3) + ")");

s = s.replace(/[z]/g, "(" + Math.pow(P[4][0], 2).toFixed(3) + ")");
s = s.replace(/[A]/g, "(" + (P[4][0] * P[4][1]).toFixed(3) + ")");
s = s.replace(/[B]/g, "(" + Math.pow(P[4][1], 2).toFixed(3) + ")");
s = s.replace(/[C]/g, "(" + P[4][0].toFixed(3) + ")");
s = s.replace(/[D]/g, "(" + P[4][1].toFixed(3) + ")");


/*
s = s.replace(/[f]/g, "(" + 64.401 + ")");
s = s.replace(/[g]/g, "(" + 66.688 + ")");
s = s.replace(/[h]/g, "(" + 69.056 + ")");
s = s.replace(/[i]/g, "(" + 8.025 + ")");
s = s.replace(/[j]/g, "(" + 8.310 + ")");

s = s.replace(/[k]/g, "(" +  103.429 + ")");
s = s.replace(/[l]/g, "(" + 64.630 + ")");
s = s.replace(/[m]/g, "(" + 40.386 + ")");
s = s.replace(/[n]/g, "(" + 10.170 + ")");
s = s.replace(/[o]/g, "(" + 6.355 + ")");

s = s.replace(/[p]/g, "(" +  125.485 + ")");
s = s.replace(/[q]/g, "(" + 35.981 + ")");
s = s.replace(/[r]/g, "(" + 10.317 + ")");
s = s.replace(/[s]/g, "(" + 11.202 + ")");
s = s.replace(/[t]/g, "(" +  3.212 + ")");

s = s.replace(/[u]/g, "(" +  115.262 + ")");
s = s.replace(/[v]/g, "(" + 4.026+ ")");
s = s.replace(/[w]/g, "(" +  0.141 + ")");
s = s.replace(/[x]/g, "(" +  10.736 + ")");
s = s.replace(/[y]/g, "(" +  0.375 + ")");

s = s.replace(/[z]/g, "(" +  82.664+ ")");
s = s.replace(/[A]/g, "(" + -20.612 + ")");
s = s.replace(/[B]/g, "(" +  5.139 + ")");
s = s.replace(/[C]/g, "(" +  9.092 + ")");
s = s.replace(/[D]/g, "(" + -2.267 + ")");
*/

/*
s = s.replace(/[a]/g, "Math.pow(x,2)");
s = s.replace(/[b]/g, "(x*y)");
s = s.replace(/[c]/g, "Math.pow(y,2)");
s = s.replace(/[d]/g, "(x)");
s = s.replace(/[e]/g, "(y)");
*/


s = s.replace(/[a]/g, "(x^2)");
s = s.replace(/[b]/g, "(x*y)");
s = s.replace(/[c]/g, "(y^2)");
s = s.replace(/[d]/g, "(x)");
s = s.replace(/[e]/g, "(y)");
console.log(s);

//let A = prepararMatrix(P);
//console.log(A);
//let equacao = gerarEquacaoOrbita(A);
//console.log(equacao);

