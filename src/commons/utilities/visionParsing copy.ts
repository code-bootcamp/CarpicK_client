export function VisionParsing(arr) {
   // 1. 운전면허증인지? 판단
   const result = {
      BirthDate: "",
      Name: "",
      LicNumber: "",
      SpecialNumber: "",
      Fail: "",
   };

   const isLicence = arr
      .filter((el: string) => el.includes("Driver's License"))
      .filter((el: string) => el.replace(" ", "").includes("자동차운전면허증"));

   if (isLicence.length !== 1) {
      result.Fail = "다시인증해주세요, 운전면허증만 인증 가능합니다.";
      return result;
   }

   // 2. flag(licNumber index) ,  (전처리)
   let LicNumber = "";
   let flag = null;
   arr.forEach((el: string, i: number) => {
      const tmp = el.split("-");
      if (tmp.length === 3) {
         tmp[0] = tmp[0].split(" ").join("-");
         LicNumber = tmp.join("-");
         flag = i;
      }
   });

   // 3. 생일찾기 (parameter)
   try {
      const tmp = arr
         .filter((el: string) => el.split("-").length === 2)
         .filter((el: string) => el.length > 13)[0]
         .split("-")[0];

      if (tmp.split("-")[0] !== undefined) {
         result.BirthDate = "19" + tmp;
      }
   } catch (error) {
      console.log(error.message);
   }

   // 4. 이름 (parameter)
   if (flag) result.Name = arr[flag + 1];

   // 5. 라이센스 넘버 (parameter)
   result.LicNumber = LicNumber;

   // 6. 일련번호 찾기 (parameter)
   const regex1 = /^[A-Za-z]+$/;
   const regex2 = /^[A-Za-z0-9]+$/;

   const filteredArr = arr
      .slice(-5)
      .filter((el: string) => el.length === 5 || el.length === 6)
      .filter((el: string) => !regex1.test(el))
      .filter((el: string) => regex2.test(el));

   if (filteredArr.length === 1) result.SpecialNumber = filteredArr[0];

   // return
   if (result) return result;
}
