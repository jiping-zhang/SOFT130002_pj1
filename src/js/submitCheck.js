{
	let captchaAns;

	var shiftCaptchaText = function ()
	{
		var captchaText = document.getElementById("captchaText");
		return function ()
		{
			let a = Math.floor(50.0 * Math.random());
			let b = Math.floor(a * Math.random());
			let c = Math.floor(2.0 * Math.random());
			switch (c)
			{
				case 0:
					captchaText.innerHTML = ("" + a + " + " + b + " = ");
					captchaAns = a + b;
					break;
				case 1:
					captchaText.innerHTML = ("" + a + " - " + b + " = ");
					captchaAns = a - b;
					break;
			}
		}
	}();

	var userNameCheck = function ()
	{
		var userName = document.getElementById("userName");
		var wrongUNText = document.getElementById("wrongUserName");
		return function ()
		{
			if (userName.checkValidity())
				wrongUNText.style.color = "#999999";
			else
				wrongUNText.style.color = "#ffd2d2";
		}
	}();

	var passwordCheck = function ()
	{
		var password = document.getElementById("password");
		var wrongPwText = document.getElementById("wrongPw");
		return function ()
		{
			if (password.checkValidity())
				wrongPwText.style.color = "#999999";
			else
				wrongPwText.style.color = "#ffd2d2";
		}
	}();

	var rePasswordCheck = function ()
	{
		var password = document.getElementById("password");
		var rePassword = document.getElementById("rePassword");
		var wrongRePwText = document.getElementById("wrongRePw");
		return function ()
		{
			if (password.value === rePassword.value)
				wrongRePwText.style.color = "#999999";
			else
				wrongRePwText.style.color = "#ffd2d2";
		}
	}();

	var submitForm = function ()
	{
		var userName = document.getElementById("userName");
		var password = document.getElementById("password");
		var rePassword = document.getElementById("rePassword");
		var iAgree = document.getElementById("iAgree");
		var signUpForm = document.getElementById("signUpForm");
		var captchaInput = document.getElementById("captchaInput");
		return function ()
		{
			if (userName.checkValidity())
			{
				if (password.checkValidity())
				{
					if (password.value === rePassword.value)
					{
						if (iAgree.checkValidity())
						{
							if (iAgree.value == "agree")
							{
								let input = -1;
								try
								{
									input = parseInt(captchaInput.value);
								} catch (e)
								{
									alert("验证答案错误！");
								}
								if (input === captchaAns)
									signUpForm.submit();
								else
									alert("验证答案错误！");
							}
							else
								alert("请先同意协议");
						}
						else
							alert("请先同意协议");
					}
					else
						alert("两次输入的密码不一样！");
				}
				else
					alert("密码需由8-16位英语字母或数字组成");
			}
			else
				alert("用户名需由6-16位字母，数字，_组成");
		}
	}();

	var setCity = (function ()
	{
		var provinceForm = document.getElementById("provinceForm");
		var cityForm = document.getElementById("cityForm");
		cities = new Object();
		cities['Shanghai'] = ['Yangpu district', 'Minghang district', 'Pudong new district'];
		cities['Beijing'] = ['Haiding district'];
		cities['Jiangsu'] = ['Suzhou', 'Wuxi', 'Nanjing', 'Changzhou', 'Nantong'];
		cities['Zhejiang'] = ['Hangzhou', 'Ninbo', 'Wenzhou'];
		cities['Guangdong'] = ['Guangzhou', 'Shenzhen', 'Foshan', 'Dongguan'];
		return function ()
		{
			var provinceValue = provinceForm.value;
			var i;
			cityForm.length = 1;
			if (provinceValue == '0') return;
			if (typeof (cities[provinceValue]) == 'undefined') return;
			for (i = 0; i < cities[provinceValue].length; i++)
			{
				cityForm.options[i + 1] = new Option();
				cityForm.options[i + 1].text = cities[provinceValue][i];
				cityForm.options[i + 1].value = cities[provinceValue][i];
			}
		}
	})();

	window.onload = function ()
	{
		setCity();
		shiftCaptchaText();
	};
}