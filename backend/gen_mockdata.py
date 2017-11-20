import random

outfile = open('mock.txt','w')

gender_dict = ['female','male']
point = [0,0.5]
level_dict = ['มัธยมปลาย','มัธยมต้น','ประถมปลาย','ประถมต้น']

subject_dict = ['คณิตศาสตร์','สังคม','ภาษาไทย','ไทย','ภาษาอังกฤษ','อังกฤษ','ศิลปะ','ดนตรี','ร้องเพลง','วิทยาศาตร์','ฟิสิกส์','เคมี','ชีวะ','เกษตร']

en = dict()
en['คณิตศาสตร์'] = 'Mathematics'
en['สังคม'] = 'Social Study'
en['ภาษาไทย'] = 'Thai'
en['ไทย'] = 'Thai'
en['ภาษาอังกฤษ'] = 'English'
en['อังกฤษ'] = 'English'
en['ศิลปะ'] = 'Arts'
en['ดนตรี'] = 'Music'
en['ร้องเพลง'] = 'Sing'
en['วิทยาศาตร์'] = 'Science'
en['ฟิสิกส์'] = 'Physics'
en['เคมี'] = 'Chemistry'
en['ชีวะ'] = 'Biology'
en['เกษตร'] = 'Farm'

loc_dict = ['สยาม','mbk','siam','ฝั่งธน','จุฬา','อุเทน','toofast','จามสแคว','สามย่าน','สีลม','ห้วยขวาง','ctw','centralworld','รัชดา']

name = ['darth','duke','lim','brown','cony','inw','bee','anakin','dom','penny','alice','bob','andy']

sname = ['vador','skywalker','freeman','getA','EZSE','zuza','strawhat','shorten','sipuden','arikato','lowner']

for i in range(7,500):
    tags = []
    cid = str(i)
    while len(cid) != 5:
        cid = '0' + cid
    random.shuffle(subject_dict)
    cname_th = subject_dict[0]
    cname_en = en[cname_th]
    
    free_day = ""
    random.shuffle(gender_dict)
    count = 0
    for i in range(1,8):
        random.shuffle(gender_dict)
        if gender_dict[0] == 'male':
            free_day += str(i)
            count += 1
    adays = []
    adays.append(free_day)
    for _ in range(count):
        front = random.randrange(19)
        plus  = 1 + random.randrange(4)
        adays.append(str(front) + "+" + str(plus))
    
    gender = gender_dict[0]
    random.shuffle(loc_dict)
    loc = loc_dict[0]
    cost = random.randrange(10)*100

    random.shuffle(name)
    random.shuffle(sname)
    tutor = name[0] + ' ' + sname[0]
    tid = cid
    tel = '08'
    for _ in range(8):
        tel += str(random.randrange(10))
    email = ''
    for j in tutor:
        if j != ' ':
            email+=j
    email += '@se.chula.ac.th'
    desc = 'Learn with cool guys!'
    review = random.randrange(5)
    random.shuffle(point)
    review += point[0]
    random.shuffle(level_dict)
    level = level_dict[0]
    status = 'active'
    
    tags.extend(cname_en.lower().split())
    tags.extend(cname_th.lower().split())

    if '1' in adays[0]:
        tags.append('จันทร์')
    if '2' in adays[0]:
        tags.append('อังคาร')
    if '3' in adays[0]:
        tags.append('พุธ')
    if '4' in adays[0]:
        tags.append('พฤหัสบดี')
    if '5' in adays[0]:
        tags.append('ศุกร์')
    if '6' in adays[0]:
        tags.append('เสาร์')
    if '7' in adays[0]:
        tags.append('อาทิตย์')
    if '1234567' in adays[0]:
        tags.append('ทุกวัน')

    if 'เสาร์' in tags or 'อาทิตย์' in tags or 'ทุกวัน' in tags:
        tags.append('วันหยุด')
    if gender == 'male':
        tags.append('male')
        tags.append('ผู้ชาย')
        tags.append('ชาย')
    else:
        tags.append('female')
        tags.append('ผู้หญิง')
        tags.append('หญิง')
    tags.append(loc)
    tags.append(str(cost))

    tags.extend(tutor.split())
    
    if level == 'มัธยมปลาย':
        tags.append('ม.ปลาย')
        tags.append('มัธยมปลาย')
    elif level == 'มัธยมต้น':
        tags.append('ม.ต้น')
        tags.append('มัธยมต้น')
    elif level == 'ประถมปลาย':
        tags.append('ประถมปลาย')
        tags.append('ประถม')
    elif level == 'ประถมต้น':
        tags.append('ประถมปลาย')
        tags.append('ประถม')

    if 'siam' in tags:
        tags.append('สยาม')
    elif 'สยาม' in tags:
        tags.append('siam')
    adays_str = '['
    for each in adays:
        adays_str += '\"'+ str(each) + '\", '
    adays_str = adays_str[:-2] + ']'

    tags_str = '['
    for each in tags:
        tags_str += '\"'+ str(each) + '\", '
    tags_str = tags_str[:-2] + ']'
    mock = '{\n    \"cid\": \"'+ cid +'\",\n    "cname_en": \"' + cname_en + '\",\n    "cname_th": \"' + cname_th + '\",\n    "adays": ' + adays_str + ',\n    "gender": \"' + gender + '\",\n    "loc": \"' + loc + '\",\n    "cost": ' + str(cost) + ',\n    "tutor": \"' + tutor + '\",\n    "tid": \"' + tid + '\",\n    "tel": \"' + tel + '\",\n    "email": \"' + email + '\",\n    "desc": \"' + desc + '\",\n    "review": ' + str(review) + ',\n    "level": \"' + level + '\",\n    "status": \"' + status + '\",\n    "tags": ' + tags_str + '\n}'

    outfile.write(mock+',')
outfile.close()