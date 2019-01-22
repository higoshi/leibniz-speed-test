function leibniz_pow(i)
    return math.pow(-1, i) / (2 * i + 1)
end

function leibniz(n)
    r = 0
    for i = 0, n do
        r = r + leibniz_pow(i)
    end
    return 4 * r
end


print(leibniz(arg[1]))