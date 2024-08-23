        window.onload = function () {
            let bt = document.querySelector("button");
            let dados = document.querySelector("#json");
        
            bt.addEventListener("click", () => {
                let cep = document.querySelector("#cep").value;
                let rua = document.querySelector("#rua");
                let bairro = document.querySelector("#bairro");
                let localidade = document.querySelector("#localidade");
                let uf = document.querySelector("#uf");
                let ibge = document.querySelector("#ibge");
                let gia = document.querySelector("#gia");
                let ddd = document.querySelector("#ddd");
                let siafi = document.querySelector("#siafi");
                let complemento = document.querySelector("#complemento");
                let unidade = document.querySelector("#unidade");
                let servidor = `https://viacep.com.br/ws/${cep}/json`;
        
                fetch(servidor)
                    .then((resp) => resp.json())
                    .then((x) => {
                     
                        rua.value = x["logradouro"];
                        bairro.value = x["bairro"];
                        localidade.value = x["localidade"];
                        uf.value = x["uf"];
                        ibge.value = x["ibge"];
                        gia.value = x["gia"];
                        ddd.value = x["ddd"];
                        siafi.value = x["siafi"];
                        complemento.value = x["complemento"];
                        unidade.value = x["unidade"];
        
                        dados.innerHTML = "";
        
                      
                        let div = document.createElement("div");
                        for (let key in x) {
                            let p = document.createElement("p");
                            let texto = document.createTextNode(`${key.toUpperCase()} : ${x[key]}`);
                            p.appendChild(texto);
                            div.appendChild(p);
                        }
                        dados.appendChild(div);
                    })
                    .catch((error) => console.error(error));
            });
        };
       