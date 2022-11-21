const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

  document.body.style.fontFamily = 'Roboto'
  
  let container = document.querySelector('.container')
  container.style.display = 'flex'
  container.style.alignItems = 'center'
  container.style.justifyContent = 'space-between'
  container.style.flexDirection = 'column'

  let h1 = document.querySelector('h1')
  h1.style.fontSize = '3rem'
  h1.style.letterSpacing = '10px'

  let h2 = document.querySelector('h2')
  h2.style.fontSize = '16px'
  h2.style.marginTop = '-35px'
  h2.style.color = 'rgba(0, 0, 0, 0.8)'

  let h3 = document.querySelector('h3')
  h3.style.fontSize = '12px'
  h3.style.marginTop = '-12px'
  h3.style.color = 'rgba(0, 0, 0, 0.7)'
  h3.style.fontWeight = 500

  let h4 = document.querySelector('h4')
  h4.style.fontSize = '12px'
  h4.style.marginTop = '-10px'
  h4.style.color = 'rgba(0, 0, 0, 0.7)'
  h4.style.fontWeight = 400

  let box = document.createElement('div')
  box.style.padding = '2rem 5rem' 
  box.style.display = 'grid'  
  box.style.gap = '10px'  
  box.style.gridTemplateColumns = '130px 130px 130px 130px 130px 130px'
  document.body.appendChild(box)

  let countriesBlocks;
  for(let i = 0; i < countries.length; i++) {
    countriesBlocks = document.createElement('div')
    countriesBlocks.textContent = countries[i].toUpperCase()
    countriesBlocks.style.padding = '4rem 0'
    countriesBlocks.style.border = '1px solid #eeeeee'
    countriesBlocks.style.fontSize = '12px'
    countriesBlocks.style.textAlign = 'center'
    countriesBlocks.style.fontWeight = 500
    box.appendChild(countriesBlocks)
  }